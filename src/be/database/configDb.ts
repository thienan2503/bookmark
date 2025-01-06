import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return; // Nếu đã kết nối, không cần kết nối lại.

  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI is not defined in .env");

  try {
    // await mongoose.connect(uri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
