import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { createPost } from "./post.service";
import { RegisterPostBody } from "./post.schema";
import { findPosts } from "./post.service";

export async function registerPostHandler(
  req: Request<{}, {}, RegisterPostBody>,
  res: Response
) {
  const { title, description, photo } = req.body;

  const owner = res.locals.user;

  console.log(req.body);

  try {
    await createPost({ title, description, photo, owner });

    return res.status(StatusCodes.CREATED).send("Post Created Successfully!");
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getPostsHandler(_: Request, res: Response) {
  try {
    const posts = await findPosts({});
    return res.status(StatusCodes.OK).send(posts);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getUserPostsHandler(req: Request, res: Response) {
  try {
    const id = res.locals.user._id;
    const posts = await findPosts({ owner: id });
    return res.status(StatusCodes.OK).send(posts);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
