import express from "express";
import { commentController } from "../controllers/comment.controller";
import protect from "../common/middlewares/protect.middleware";

const commentRouter = express.Router();

commentRouter.get("/get-comment/:id", commentController.getComment);
commentRouter.get(
  "/create-comment/:id",
  protect,
  commentController.createComment
);

export default commentRouter;
