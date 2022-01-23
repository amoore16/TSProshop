import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Database Connection Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
