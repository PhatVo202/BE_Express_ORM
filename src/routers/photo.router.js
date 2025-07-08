import express from "express";
import { photoController } from "../controllers/photo.controller";
import protect from "../common/middlewares/protect.middleware";
import uploadCloud from "../common/multer/cloud.multer";

const photoRouter = express.Router();

photoRouter.get("/", photoController.findAll);
photoRouter.get("/:id", photoController.findOne);

photoRouter.post(
  "/created-photo",
  protect,
  uploadCloud.single("anh"),
  photoController.createPhoto
);

photoRouter.get("/is-save/:id", protect, photoController.isSave);

photoRouter.get("/created/user", protect, photoController.getCreatedPhoto);
photoRouter.get("/saved/user", protect, photoController.getSavedPhoto);

photoRouter.delete("/deleted-photo/:id", protect, photoController.deletedPhoto);

export default photoRouter;
