import { body } from "express-validator";

export const vUserCreation = [
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("username must be at least 3 characters long"),
  body("email").isEmail().withMessage("invalid email").trim().normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long")
    .trim(),
];

export const vUserLogin = [
  body("email").isEmail().withMessage("invalid email").trim().normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long")
    .trim(),
];
