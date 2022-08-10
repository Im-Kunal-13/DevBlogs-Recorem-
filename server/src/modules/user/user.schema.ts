import { object, string, TypeOf } from "zod";

export const registerUserSchema = {
  body: object({
    username: string({
      required_error: "username is required",
    }),
    email: string({
      required_error: "email is required",
    }).email('must be a valid email'),
    password: string({
      required_error: "username is required",
    })
      .min(6, "Passwords must be atleast 6 characters long")
      .max(64, "Passwords should not be longer than 64 characters."),
    confirmPassword: string({
      required_error: "username is required",
    }),
    pic: string({
      required_error: "Please upload your profile picture.",
      
    }).default(""),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }),
};

export type RegisterUserBody = TypeOf<typeof registerUserSchema.body>;
