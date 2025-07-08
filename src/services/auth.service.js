import { BadrequestException } from "../common/helpers/exception.helper";
import { prisma } from "../common/prisma/init.prisma";
import bcrypt from "bcrypt";
import tokenService from "./token.service";

export const authService = {
  register: async function (req) {
    const { email, mat_khau, ho_ten, tuoi } = req.body;

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
        tuoi: tuoi,
      },
    });

    delete newUser.mat_khau;

    return newUser;
  },

  login: async function (req) {
    const { email, mat_khau } = req.body;

    const userExist = await prisma.nguoi_dung.findUnique({
      where: {
        email: email,
      },
    });

    if (!userExist) {
      throw new BadrequestException("Tài khoản không hợp lệ");
    }

    const isPassword = await bcrypt.compare(mat_khau, userExist.mat_khau);

    if (!isPassword) {
      throw new BadrequestException("Sai mật khẩu");
    }

    const token = tokenService.createToken(userExist.nguoi_dung_id);

    return token;
  },

  refreshToken: async function (req) {
    const { accessToken, refreshToken } = req.body;
    const decodeRefreshToken = tokenService.verifyrefreshToken(refreshToken);
    const decodeAccessToken = tokenService.verifyAcessToken(accessToken, true);
    if (decodeRefreshToken.userId !== decodeAccessToken.userId) {
      throw new BadrequestException("Refresh Token không thành công");
    }
    const tokens = tokenService.createToken(decodeRefreshToken.userId);
    return tokens;
  },
};
