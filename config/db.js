import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://DevME5B:DevatME5B@module-end-assignment-5.fjmkwcv.mongodb.net/?retryWrites=true&w=majority&appName=Module-End-Assignment-5",
      {
        ssl: true,
        tlsAllowInvalidCertificates: false,
      }
    );

    console.log("✅ Database connection established");
  } catch (error) {
    console.error("❌ Failed to connect to Database:", error.message);
    process.exit(1);
  }
};

export default connectDB;
