import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
//register controller
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if (!username || !password || !email) {
        return res.status(400).json({
          success: false,
          message: "Username and password are required.",
        });
      }
    const userCheck = await User.findOne({ $or: [{ username }, { email }] });
    if (userCheck) {
      return res.status(400).json({
        sucess: false,
        message: "user is already exist either with same username or email",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
    if (user) {
      res.status(201).json({
        sucess: true,
        message: "user registered sucessfully!",
        user,
      });
    } else {
      res.status(400).json({
        sucess: false,
        message: "unable to reqister user! please try again.",
      });
    }
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "something went wrong! please try again.",
    });
  }
};
//login controller
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: "Username and password are required.",
        });
      }
    const user = await User.findOne({ username });
    if (!user) {
     return res.status(400).json({
        sucess: false,
        message: "Invalid credientials.",
      });
    }
    const isPasswordCorrect =await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
     return res.status(400).json({
        sucess: false,
        message: "incorrect password.",
      });
    }
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({
      sucess: true,
      message: "Logged in sucessfull",
      accessToken,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "something went wrong! please try again.",
    });
  }
};
