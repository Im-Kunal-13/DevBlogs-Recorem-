import { object, string, TypeOf } from "zod";

export const registerPostSchema = {
  body: object({
    title: string({
      required_error: "please enter the title for the post",
    }),
    description: string({
      required_error: "description is required",
    }),
    coverImage: string({
      required_error: "Please upload a picture of your post.",
    }),
    categories: string({
      required_error: "Enter the categories of the post.",
    }).array(),
  }),
};

export type RegisterPostBody = TypeOf<typeof registerPostSchema.body>;
