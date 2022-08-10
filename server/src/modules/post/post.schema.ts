import { object, string, TypeOf } from "zod";

export const registerPostSchema = {
  body: object({
    title: string({
      required_error: "please enter the title for the post",
    }),
    description: string({
      required_error: "description is required",
    }),
    photo: string({
      required_error: "Please upload a picture of your post.",
    }).default(""),
  }),
};

export type RegisterPostBody = TypeOf<typeof registerPostSchema.body>;
