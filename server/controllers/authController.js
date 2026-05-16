import asyncHandler from "express-async-handler";import User from "../models/User.js";import generateToken from "../utils/generateToken.js";
export const loginAdmin=asyncHandler(async(req,res)=>{const{email,password}=req.body;const user=await User.findOne({email});if(user&&await user.matchPassword(password))return res.json({_id:user._id,username:user.username,email:user.email,token:generateToken(user._id)});res.status(401);throw new Error('Invalid admin credentials')});
export const getAdminProfile=asyncHandler(async(req,res)=>res.json(req.user));
