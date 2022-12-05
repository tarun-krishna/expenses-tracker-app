const mongoose = require("mongoose");

const database = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tarun:4AD17ec073@expense-tracker.ejgpwpt.mongodb.net/my-expenses?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Mongo DB connected Successfully");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
