import mongoose from "mongoose";

export default async function () {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log("mongodb connection problem : ", error);
  }
}
