import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import User from "../models/User.js";

dotenv.config();

const email = process.env.ADMIN_EMAIL || "admin@abhiyan.dev";
const username = process.env.ADMIN_USERNAME || "abhiyan";
const password = process.env.ADMIN_PASSWORD;

if (!password) {
  console.error("ADMIN_PASSWORD is required. Set it in Render Environment first.");
  process.exit(1);
}

await connectDB();

let user = await User.findOne({ email });

if (user) {
  user.username = username;
  user.password = password;
  await user.save();
  console.log(`Admin password reset for ${email}`);
} else {
  await User.create({ username, email, password });
  console.log(`Admin user created for ${email}`);
}

await mongoose.connection.close();
