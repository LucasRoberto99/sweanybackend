import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    lowercase: true,
  },
  hash: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

export default User;
