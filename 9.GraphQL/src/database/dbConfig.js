import mongoose from "mongoose";
export const dbConfig = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ID);
    console.log("database connected sucessfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
