import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { createUser } from "./user.service";
import { RegisterUserBody } from "./user.schema";

export async function registerUserHandler(req: Request<{}, {}, RegisterUserBody>, res: Response) {
  const { username, email, password, pic } = req.body;
  
  console.log(req.body);

  try {
    await createUser({ username, email, password, pic });

    return res.status(StatusCodes.CREATED).send("User Created Successfully!");
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(StatusCodes.CONFLICT).send("A user for the e-mail address exists!");
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
