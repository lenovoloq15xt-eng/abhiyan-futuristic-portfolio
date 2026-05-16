import asyncHandler from "express-async-handler";import Skill from "../models/Skill.js";
export const getSkills=asyncHandler(async(req,res)=>res.json(await Skill.find().sort({category:1,level:-1})));
export const createSkill=asyncHandler(async(req,res)=>res.status(201).json(await Skill.create(req.body)));
export const updateSkill=asyncHandler(async(req,res)=>res.json(await Skill.findByIdAndUpdate(req.params.id,req.body,{new:true})));
export const deleteSkill=asyncHandler(async(req,res)=>{await Skill.findByIdAndDelete(req.params.id);res.json({message:'Skill deleted'})});
