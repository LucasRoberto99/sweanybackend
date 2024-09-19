import express from "express";

import { createUser } from "../controllers/user.js";

const router = express.Router();

router.get("/create", createUser);

export default router;
