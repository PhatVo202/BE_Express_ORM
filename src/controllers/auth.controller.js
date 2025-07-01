import { responseSuccess } from "../common/helpers/response.helper";
import { authService } from "../services/auth.service";

export const authController = {
  register: async function (req, res, next) {
    try {
      const result = await authService.register(req);
      const response = responseSuccess(result);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  login: async function (req, res, next) {
    try {
      const result = await authService.login(req);
      const response = responseSuccess(result);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  getInfor: async function (req, res, next) {
    try {
      const result = await authService.getInfor(req);
      const response = responseSuccess(result);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
