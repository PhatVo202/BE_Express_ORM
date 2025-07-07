import express from "express";
import { photoController } from "../controllers/photo.controller";

const photoRouter = express.Router();

photoRouter.get("/", photoController.findAll);
photoRouter.get("/:id", photoController.findOne);

export default photoRouter;
