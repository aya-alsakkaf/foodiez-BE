const mongoose = require("mongoose");
const dontenv = require("dotenv");
dontenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_LINK);
    console.log(`mongo connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
