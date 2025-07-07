import { resolve } from "extensionless";
import { BadrequestException } from "../common/helpers/exception.helper";
import { prisma } from "../common/prisma/init.prisma";
import bcrypt from "bcrypt";
import cloudinary from "../common/init.cloudinary";
import path from "path";
import fs from "fs";

export const userService = {
  update: async function (req) {
    const userId = req.user.nguoi_dung_id;
    const { mat_khau, ho_ten, tuoi } = req.body;

    const hashPassword = await bcrypt.hash(mat_khau, 10);

    const updateUser = await prisma.nguoi_dung.update({
      where: {
        nguoi_dung_id: Number(userId),
      },
      data: {
        mat_khau: hashPassword,
        ho_ten: ho_ten,
        tuoi: Number(tuoi),
      },
    });
    return updateUser;
  },
  uploadAvatar: async (req) => {
    console.log({ file: req.file });
    const file = req.file;

    if (!file) {
      throw new BadrequestException("Chưa tìm thấy file");
    }

    const upload = await new Promise((resolve) => {
      cloudinary.uploader
        .upload_stream({ folder: "images" }, (error, upload) => {
          return resolve(upload);
        })
        .end(file.buffer);
    });

    const user = req.user;

    try {
      await prisma.nguoi_dung.update({
        where: {
          nguoi_dung_id: req.user.nguoi_dung_id,
        },
        data: {
          anh_dai_dien: upload.public_id,
        },
      });

      if (user.anh_dai_dien) {
        const oldFilePath = path.join("images", user.anh_dai_dien);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }

      cloudinary.uploader.destroy(user.anh_dai_dien);
    } catch (error) {
      throw new BadrequestException(error.message);
    }

    return {
      folder: upload.asset_folder,
      filename: upload.original_filename,
      imgUrl: upload.secure_url,
    };
  },
  getInfo: async function (req) {
    delete req.user.mat_khau;
    return req.user;
  },
};
