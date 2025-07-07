import express from "express";
import { authController } from "../controllers/auth.controller";
import protect from "../common/middlewares/protect.middleware";
export const authRouter = express.Router();

authRouter.post("/register", authController.register);

authRouter.post("/login", authController.login);

authRouter.post("/refresh-token", authController.refreshToken);
