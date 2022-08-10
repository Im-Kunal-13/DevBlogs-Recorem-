import { object, string, TypeOf } from "zod";

export const loginSchema = {
  body: object({
    email: string({
      required_error: "email is required",
    }).email("Not a valid email!"),
    password: string({
      required_error: "password is required!",
    })
      .min(6, "password must be atleast 6 characters in length")
      .max(64, "password must not be longer than 64 characters"),
  }),
};

export type LoginBody = TypeOf<typeof loginSchema.body>;
