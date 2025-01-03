import { connect } from "mongoose";
export const connectToDB = async () => {
  try {
    const dbID = await connect(process.env.MONGODB_ID);
    if (dbID) {
      console.log("database connected sucessfully");
    } else {
      throw new Error("database connection failed");
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
