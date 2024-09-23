import jwt from "jsonwebtoken";

import User from "../../models/User.js";
import generatePassword from "../../encryption/generatePassword.js";

// créer un nouvel utilisateur
export const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const usernameUser = await User.findOne({ username: username });

    if (usernameUser) {
      const err = new Error("username already in db");
      err.statusCode = 409;
      return next(err);
    }

    const emailUser = await User.findOne({ email: email });

    if (emailUser) {
      const err = new Error("email already in db");
      err.statusCode = 409;
      return next(err);
    }

    const hash = await generatePassword(password);

    const newUser = new User({
      username,
      email,
      hash,
    });

    const token = jwt.sign(
      { id: newUser._id, username: newUser.username, email: newUser.email },
      process.env.JWT_SECRET
    );

    newUser.token = token;

    await newUser.save();

    return res.cookie("token", token).status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
