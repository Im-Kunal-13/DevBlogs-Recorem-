import express from "express";
import { processRequestBody } from "zod-express-middleware";
import requireUser from "../../middlewares/requireUser";
import { registerPostHandler, getPostsHandler, getUserPostsHandler } from "./post.controller";
import { registerPostSchema } from "./post.schema";

const router = express.Router();

router.post(
  "/createpost",
  processRequestBody(registerPostSchema.body),
  requireUser,
  registerPostHandler
);

router.get("/allposts", requireUser, getPostsHandler);

router.get("/myposts", requireUser, getUserPostsHandler)

export default router;
