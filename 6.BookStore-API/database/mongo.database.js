import { connect } from "mongoose";
const connectToDB=async()=>{
    try{
        const dBId=await connect(process.env.MONGODB_ID)
        console.log("MongoDB is connected sucessfully!!")
    }catch(err){
        console.log("MongoDB connection failed",err);
        process.exit(1);
    }
}
export default connectToDB;