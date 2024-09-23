import express from "express";

import validator from "../middlewares/validators.js";
import { vUserCreation, vUserLogin } from "../validators/user.js";

import { createUser } from "../controllers/user/create.js";
import { loginUser } from "../controllers/user/login.js";

const router = express.Router();

router.post("/create", vUserCreation, validator, createUser);

router.post("/login", vUserLogin, validator, loginUser);

export default router;
