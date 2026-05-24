import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

const adminIdentity = () => ({
  _id: "env-admin",
  username: process.env.ADMIN_USERNAME || "abhiyan",
  email: String(process.env.ADMIN_EMAIL || "admin@abhiyan.dev").trim().toLowerCase()
});

const sendLogin = (res, user, envAdmin = false) =>
  res.json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token: generateToken(user._id, envAdmin ? { envAdmin: true } : {})
  });

const syncAdminUser = async (email, username, password) => {
  try {
    let user = await User.findOne({ email });

    if (user) {
      user.username = username;
      user.password = password;
      await user.save();
      return user;
    }

    return await User.create({ username, email, password });
  } catch (error) {
    console.warn(`Admin DB sync skipped: ${error.message}`);
    return null;
  }
};

export const loginAdmin = asyncHandler(async (req, res) => {
  const email = String(req.body.email || "").trim().toLowerCase();
  const password = String(req.body.password || "");
  const adminEmail = String(process.env.ADMIN_EMAIL || "admin@abhiyan.dev").trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD;
  const username = process.env.ADMIN_USERNAME || "abhiyan";

  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
  }

  if (!adminPassword) {
    res.status(500);
    throw new Error("ADMIN_PASSWORD is missing in Render Environment");
  }

  if (email === adminEmail && password === adminPassword) {
    const syncedUser = await syncAdminUser(adminEmail, username, adminPassword);
    return sendLogin(res, syncedUser || adminIdentity(), !syncedUser);
  }

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      return sendLogin(res, user);
    }
  } catch (error) {
    console.warn(`Mongo login lookup failed: ${error.message}`);
  }

  res.status(401);
  throw new Error("Invalid admin credentials");
});

export const getAdminProfile = asyncHandler(async (req, res) => res.json(req.user));
