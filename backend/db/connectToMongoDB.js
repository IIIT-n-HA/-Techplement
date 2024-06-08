import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongoDB = async () => {
  try {
    const mongoURI = process.env.MONGO_DB_URI;
    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongoDB;
