import express from "express";

import "dotenv/config";

import userRouter from "./routes/user.js";

const app = express();

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("server started on port " + process.env.PORT);
});
