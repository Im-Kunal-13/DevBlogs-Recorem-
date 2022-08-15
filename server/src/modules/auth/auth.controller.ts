import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import omit from "../../helpers/omit";
import { findUserByEmail } from "../user/user.service";
import { LoginBody } from "./auth.schema";
import { signJwt } from "./auth.utils";

export async function loginHandler(
  req: Request<{}, {}, LoginBody>,
  res: Response
) {
  const { email, password } = req.body;


  // find the user by email
  const user = await findUserByEmail(email);

  if (!user || !(await user.comparePassword(password))) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send("Invalid email or password!.");
  }

  const payload: any = omit(user.toJSON(), ["password", "comparePassword"]);

  const jwt = signJwt(payload);

  const { _id, username, pic } = user;

  res.cookie("accessToken", jwt, {
    maxAge: 3.154e10, // 1 year
    httpOnly: true,
    domain: "localhost",
    path: "/",
    sameSite: "strict",
    secure: false,
  });

  return res
    .status(StatusCodes.OK)
    .json({ jwt, user: { _id, username, email, pic } });
}
