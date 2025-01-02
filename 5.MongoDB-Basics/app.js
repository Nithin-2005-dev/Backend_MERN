
const mongoose = require("mongoose");
mongoose
  .connect(
    ``
  )
  .then(() => console.log("database conneted cucessfully"))
  .catch((err) => console.log(err.message));

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//create user model
const User = mongoose.User || mongoose.model("User", userSchema);

const runQueryExamples = async () => {
  try {
    //create a new document
    const newUser = await User.create({
      name: "jaan",
      email: "nk0402246@gmail.com",
      age: 19,
      isActive: false,
      tags: ["Hi", "Bye"],
    });
    console.log("new user created", newUser);
    // const allUsers = await User.find().select("name email -_id");
    // const allUsers = await User.find().limit(3).skip(1);
    // const allUsers = await User.find().sort({name:-1});
    // const allUsers = await User.find().countDocuments({name:"jaan"});
    // const allUsers = await User.findOneAndDelete({name:"jaan"});
    const allUsers = await User.findByIdAndUpdate(newUser._id,{
        $set:{email:"jaan@email.com"},
        $push:{tags:"updated"}
    },{new:true});
    console.log(allUsers);
  } catch (err) {
    console.log(err.message);
  } finally {
    await mongoose.connection.close();
  }
};
runQueryExamples();
