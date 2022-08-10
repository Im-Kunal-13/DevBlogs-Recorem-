import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../modules/auth/auth.utils";

function deserializeUser(req: Request, res: Response, next: NextFunction) {
  // Getting the accessToken from the authorization header or the request cookie.
  const accessToken = (
    req.headers.authorization ||
    req.cookies.accessToken ||
    ""
  ).replace(/^Bearer\s/, "");

  if (!accessToken) {
    return next();
  }

  const decoded = verifyJwt(accessToken);

  if (decoded) {
    res.locals.user = decoded;
  }

  return next();
}

export default deserializeUser;
