import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { createPost, findPost, likePost, unlikePost } from "./post.service";
import { RegisterPostBody } from "./post.schema";
import { findPosts } from "./post.service";

export async function registerPostHandler(
  req: Request<{}, {}, RegisterPostBody>,
  res: Response
) {
  const { title, description, coverImage, categories } = req.body;

  const owner = res.locals.user;

  try {
    var today = new Date();
    var options: any = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    var timeCreated: string = today.toLocaleDateString("en-US", options);

    await createPost({
      title,
      description,
      categories,
      coverImage,
      owner,
      timeCreated,
      likes: [],
    });

    return res.status(StatusCodes.CREATED).send("Post Created Successfully!");
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getPostsHandler(_: Request, res: Response) {
  try {
    const posts = await findPosts({});

    return res.status(StatusCodes.OK).json(posts);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getUserPostsHandler(req: Request, res: Response) {
  try {
    const { userId } = req.params;

    const posts = await findPosts({ owner: userId });

    return res.status(StatusCodes.OK).send(posts);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getBlogHandler(req: Request, res: Response) {
  try {
    const { postId } = req.params;

    const post = await findPost(postId);
    return res.status(StatusCodes.OK).json(post);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function likeHandler(req: Request, res: Response) {
  try {
    const { postId } = req.params;

    const result = await likePost(postId, res.locals.user._id);

    return res.status(StatusCodes.OK).json(result);
  } catch (err: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err.message);
  }
}

export async function unlikeHandler(req: Request, res: Response) {
  try {
    const { postId } = req.params;

    const result = await unlikePost(postId, res.locals.user._id);

    return res.status(StatusCodes.OK).json(result);
  } catch (err: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err.message);
  }
}
