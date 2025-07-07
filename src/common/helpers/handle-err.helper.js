import { responseError } from "./response.helper";

import jwt from "jsonwebtoken";
import { statusCodes } from "./statu-code.helper";
// import multer from "multer";

export const handleError = (err, req, res, next) => {
  console.log("MiddleWare Error đặc biệt", err);

  if (err instanceof jwt.JsonWebTokenError) {
    err.code = statusCodes.UNAUTHORIZED;
  }

  if (err instanceof jwt.TokenExpiredError) {
    err.code = statusCodes.FORBIDDEN;
  }

  // Xử lý lỗi Prisma phổ biến
  if (typeof err.code === "string") {
    switch (err.code) {
      case "P2003":
        err.code = statusCodes.BAD_REQUEST;
        err.message =
          "Không thể xoá vì dữ liệu đang được liên kết (vi phạm khoá ngoại)";
        break;
      case "P2025":
        err.code = statusCodes.NOT_FOUND;
        err.message = "Không tìm thấy dữ liệu";
        break;
      case "P2002":
        err.code = statusCodes.CONFLICT;
        err.message = "Dữ liệu đã tồn tại (vi phạm ràng buộc unique)";
        break;
      default:
        err.code = statusCodes.SERVER_ERROR;
        err.message = "Lỗi hệ thống từ Prisma";
        break;
    }
  }

  //   if (err instanceof multer.MulterError) {
  //     err.code = statusCodes.BAD_REQUEST;
  //   }

  const resData = responseError(err?.message, err?.code, err?.stack);

  res.status(resData.statusCode).json(resData);
};
