import mongoose from "mongoose";
export const connectToDB = async () => {
  try {
    const dbId = await mongoose.connect(process.env.MONGODB_ID);
    if (dbId) {
      console.log("database connected successfully!");
    } else {
      console.log("database connection failed!");
    }
  } catch (err) {
    console.log(err);
  }
};
