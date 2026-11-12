
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      serverSelectionTimeoutMS: 10000
    });

    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    throw err;
  }
};

module.exports.connectDB = connectDB;
