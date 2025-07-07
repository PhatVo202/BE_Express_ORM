import { responseSuccess } from "../common/helpers/response.helper";
import { photoService } from "../services/photo.service";

export const photoController = {
  findAll: async function (req, res, next) {
    try {
      const result = await photoService.findAll(req);
      const response = responseSuccess(result);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  findOne: async function (req, res, next) {
    try {
      const result = await photoService.findOne(req);
      const response = responseSuccess(
        result,
        `Get photo #${req.params.id} haha`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  update: async function (req, res, next) {
    try {
      const result = await photoService.update(req);
      const response = responseSuccess(
        result,
        `Update photo #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  remove: async function (req, res, next) {
    try {
      const result = await photoService.remove(req);
      const response = responseSuccess(
        result,
        `Remove photo #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
