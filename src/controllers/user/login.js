import User from "../../models/User.js";
import comparePassword from "../../encryption/comparePassword.js";

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      const err = new Error("email incorrect");
      err.statusCode = 400;
      return next(err);
    }

    const result = await comparePassword(password, user.hash);

    console.log(result);

    if (!result) {
      const err = new Error("mot de passe incorrect");
      err.statusCode = 400;
      return next(err);
    }

    return res
      .cookie("token", user.token)
      .status(200)
      .json({ message: "user connected" });
  } catch (error) {
    next(error);
  }
};
