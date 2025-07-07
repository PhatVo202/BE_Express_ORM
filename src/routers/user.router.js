import express from "express";
import { userController } from "../controllers/user.controller";
import protect from "../common/middlewares/protect.middleware";
import uploadCloud from "../common/multer/cloud.multer";

const userRouter = express.Router();

userRouter.get("/get-info", protect, userController.getInfo);
userRouter.put("/", protect, userController.update);
userRouter.post(
  "/upload-avatar",
  protect,
  uploadCloud.single("avatar"),
  userController.uploadAvatar
);

export default userRouter;
