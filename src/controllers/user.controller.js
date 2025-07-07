import { responseSuccess } from "../common/helpers/response.helper";
import { userService } from "../services/user.service";

export const userController = {
  getInfo: async function (req, res, next) {
    try {
      const result = await userService.getInfo(req);
      const response = responseSuccess(result);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
  update: async function (req, res, next) {
    try {
      const result = await userService.update(req);
      const response = responseSuccess(result, `Cập nhật user thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
  uploadAvatar: async function (req, res, next) {
    try {
      const result = await userService.uploadAvatar(req);
      const response = responseSuccess(result, `Cập nhật avatar thành công`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
