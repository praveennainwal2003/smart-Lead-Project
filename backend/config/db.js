const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("⏳ Trying to connect MongoDB...");

    await mongoose.connect(process.env.MONGO_URI, {
      tls: true,
      tlsAllowInvalidCertificates: true,
      serverSelectionTimeoutMS: 5000,
      ssl: true
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error");
    console.error(err);
  }
};

module.exports = connectDB;
