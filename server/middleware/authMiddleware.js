import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

export const protect = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization?.startsWith("Bearer") && req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.envAdmin) {
    req.user = {
      _id: "env-admin",
      username: process.env.ADMIN_USERNAME || "abhiyan",
      email: process.env.ADMIN_EMAIL || "admin@abhiyan.dev"
    };
    return next();
  }

  req.user = await User.findById(decoded.id).select("-password");

  if (!req.user) {
    res.status(401);
    throw new Error("Not authorized");
  }

  next();
});
