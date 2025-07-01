import express from "express";
import { authController } from "../controllers/auth.controller";
export const authRouter = express.Router();

authRouter.post("/register", authController.register);

authRouter.post("/login", authController.login);

authRouter.get("/get-info", authController.getInfor);
// authRouter.get("/get-info", protect, authController.getInfor);
