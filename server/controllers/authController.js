import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

const sendLogin = (res, user) =>
  res.json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token: generateToken(user._id)
  });

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

  let user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    return sendLogin(res, user);
  }

  if (adminPassword && email === adminEmail && password === adminPassword) {
    if (user) {
      user.username = username;
      user.password = adminPassword;
      await user.save();
    } else {
      user = await User.create({ username, email: adminEmail, password: adminPassword });
    }

    return sendLogin(res, user);
  }

  res.status(401);
  throw new Error("Invalid admin credentials");
});

export const getAdminProfile = asyncHandler(async (req, res) => res.json(req.user));
