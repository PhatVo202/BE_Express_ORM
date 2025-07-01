import { BadrequestException } from "../common/helpers/exception.helper";
import { prisma } from "../common/prisma/init.prisma";
import bcrypt from "bcrypt";

export const authService = {
  register: async function (req) {
    const { email, mat_khau, ho_ten } = req.body;

    const userExist = await prisma.nguoi_dung.findUnique({
      where: {
        email: email,
      },
    });

    if (userExist) {
      throw new BadrequestException("Tài khoản đã tồn tại vui lòng đăng nhập");
    }

    const hashedPassword = await bcrypt.hash(mat_khau, 10);

    const newUser = await prisma.nguoi_dung.create({
      data: {
        email: email,
        mat_khau: hashedPassword,
        ho_ten: ho_ten,
      },
    });

    console.log({ Createdresgister: newUser });
    delete newUser.mat_khau;

    return newUser;
  },

  login: async function (req) {
    return `This action returns login`;
  },

  getInfor: async function (req) {
    return `This action returns a id: ${req.params.id} auth`;
  },
};
