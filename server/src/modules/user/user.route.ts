import express from "express";
import { processRequestBody } from "zod-express-middleware";
import requireUser from "../../middlewares/requireUser";
import { getUserHandler, registerUserHandler } from "./user.controller";
import { registerUserSchema } from "./user.schema";

const router = express.Router();

router.post(
  "/",
  processRequestBody(registerUserSchema.body),
  registerUserHandler
);

router.get("/:userId", requireUser, getUserHandler);

export default router;
