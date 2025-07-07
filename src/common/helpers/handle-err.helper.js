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

  //   if (err instanceof multer.MulterError) {
  //     err.code = statusCodes.BAD_REQUEST;
  //   }

  const resData = responseError(err?.message, err?.code, err?.stack);

  res.status(resData.statusCode).json(resData);
};
