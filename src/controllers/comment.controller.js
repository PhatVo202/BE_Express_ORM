import { responseSuccess } from "../common/helpers/response.helper";
import { commentService } from "../services/comment.service";

export const commentController = {
  getComment: async function (req, res, next) {
    try {
      const result = await commentService.getComment(req);
      const response = responseSuccess(result);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  createComment: async function (req, res, next) {
    try {
      const result = await commentService.createComment(req);
      const response = responseSuccess(result);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
