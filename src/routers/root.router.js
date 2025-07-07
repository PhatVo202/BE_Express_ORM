import express from "express";
import { authRouter } from "./auth.router";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../common/swagger/init.swagger";
import photoRouter from "./photo.router";
import userRouter from "./user.router";
import commentRouter from "./comment.router";

export const rootRouter = express.Router();

rootRouter.use("/api-docs", swaggerUi.serve);
rootRouter.get(
  "/api-docs",
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: { persistAuthorization: true },
  })
);

rootRouter.use("/auth", authRouter);
rootRouter.use("/photos", photoRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/comments", commentRouter);
