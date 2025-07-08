import { responseSuccess } from "../common/helpers/response.helper";
import { photoService } from "../services/photo.service";

export const photoController = {
  findAll: async function (req, res, next) {
    try {
      const result = await photoService.findAll(req);
      const response = responseSuccess(
        result,
        "Lấy tất cả hình ảnh thành công"
      );
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
        "Tìm kiếm hình ảnh theo id thành công"
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  getCreatedPhoto: async function (req, res, next) {
    try {
      const result = await photoService.createdPhoto(req);
      const response = responseSuccess(
        result,
        "Lấy danh sách ảnh đã tạo thành công"
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  getSavedPhoto: async function (req, res, next) {
    try {
      const result = await photoService.getSavedPhoto(req);
      const response = responseSuccess(
        result,
        "Lấy danh sách ảnh đã lưu thành công"
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  deletedPhoto: async function (req, res, next) {
    try {
      const result = await photoService.deletedPhoto(req);
      const response = responseSuccess(result, "Xoá ảnh thành công");
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  isSave: async function (req, res, next) {
    try {
      const result = await photoService.isSave(req);
      const response = responseSuccess(result);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  createPhoto: async function (req, res, next) {
    try {
      const result = await photoService.createPhoto(req);
      const response = responseSuccess(result, "Tạo ảnh thành công");
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
