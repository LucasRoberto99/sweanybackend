import "dotenv/config";
import express from "express";
import cors from "cors";

import mongoConnect from "./connections/mongodb.js";

// routers
import userRouter from "./routes/user.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoConnect();

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("server started on port " + process.env.PORT);
});
