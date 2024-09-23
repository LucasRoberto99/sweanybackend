import { validationResult } from "express-validator";

export default function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("validation error");
    err.details = errors.array();
    err.statusCode = 400;
    return next(err);
  }
  next();
}
