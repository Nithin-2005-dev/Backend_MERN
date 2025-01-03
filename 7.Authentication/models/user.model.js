import { model, Schema } from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: [true, "user name should be unique"],
      require: [true, "user name is require"],
    },
    email: {
      type: String,
      unique: [true, "email should be unique"],
      require: [true, "email is require"],
      trim: true,
    },
    password: {
      type: String,
      require: [true, "password is require"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);
export const User = model("User", userSchema);
