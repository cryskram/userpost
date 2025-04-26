import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/userpostapi");
    console.log("[Database] Connected to the Database");
  } catch (err) {
    console.error("[Database] Database connection error: ", err);
    process.exit(1);
  }
};
