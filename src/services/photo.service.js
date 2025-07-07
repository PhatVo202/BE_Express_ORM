import {
  BadrequestException,
  ForbiddenException,
} from "../common/helpers/exception.helper";
import { prisma } from "../common/prisma/init.prisma";

export const photoService = {
  findAll: async function (req) {
    //(page -1) * pageSize
    let { page, pageSize, filters } = req.query;
    page = +page > 0 ? +page : 1;
    pageSize = +pageSize > 0 ? +pageSize : 3;
    const skip = (page - 1) * pageSize;

    filters = JSON.parse(filters || `{}`);

    Object.entries(filters).forEach(([key, value], index, arr) => {
      if (value === "" || value === null || value === undefined) {
        delete filters[key];
        return;
      }
      if (typeof value === "string") {
        filters[key] = { contains: value };
      }
    });

    const where = {
      ...filters,
    };

    const photos = await prisma.hinh_anh.findMany({
      skip: skip, //OFFSET: tức là bắt đầu từ index thứ mấy
      take: pageSize, //LIMIT
      where: where,
    });

    const totalItem = await prisma.hinh_anh.count({
      where: where,
    });
    const totalPage = Math.ceil(totalItem / pageSize);

    return {
      page: page, //số trang
      pageSize: pageSize, // 1 trang có bao nhiêu Item
      totalItem: totalItem, //Tổng cộng có bao nhiêu item
      totalPage: totalPage, //Tổng cộng bao nhiêu trang
      items: photos,
    };
  },

  findOne: async function (req) {
    const { id } = req.params;
    const photoDetail = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id: Number(id),
      },
      include: {
        nguoi_dung: {
          omit: {
            mat_khau: true,
          },
        },
      },
    });
    if (!photoDetail) {
      throw new BadrequestException("Không tìm thấy hình ảnh");
    }
    return photoDetail;
  },

  createdPhoto: async function (req) {
    const userId = req.user.nguoi_dung_id;

    const data = await prisma.hinh_anh.findMany({
      where: {
        nguoi_dung_id: +userId,
      },
    });
    return data;
  },

  getSavedPhoto: async function (req) {
    const userId = req.user.nguoi_dung_id;
    console.log({ id: userId });
    const savedPhotos = await prisma.luu_anh.findMany({
      where: {
        nguoi_dung_id: +userId,
      },
      include: {
        hinh_anh: true,
      },
    });

    return savedPhotos;
  },
  deletedPhoto: async function (req) {
    const userId = req.user.nguoi_dung_id;
    const photoId = req.params.id;
    const photo = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id: +photoId,
      },
    });

    if (!photo) {
      throw new BadrequestException("Ảnh không tồn tại");
    }

    if (photo.nguoi_dung_id !== userId) {
      throw new ForbiddenException("Bạn không có quyền xoá ảnh này!");
    }

    await prisma.luu_anh.deleteMany({
      where: {
        hinh_id: +photoId,
      },
    });

    await prisma.hinh_anh.delete({
      where: {
        hinh_id: +photoId,
      },
    });

    return "Xóa ảnh thành công";
  },
};
