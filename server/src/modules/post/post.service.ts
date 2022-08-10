import { Post, PostModel } from "./post.model";

export async function createPost(post: Post) {
  return PostModel.create(post);
}

export function findPosts(query: any) {
  return PostModel.find(query).populate("owner", "_id username email pic").lean();
}