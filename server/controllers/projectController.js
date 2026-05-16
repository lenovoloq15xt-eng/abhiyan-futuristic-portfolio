import asyncHandler from "express-async-handler";import Project from "../models/Project.js";
const stack=v=>Array.isArray(v)?v:String(v||'').split(',').map(x=>x.trim()).filter(Boolean);
export const getProjects=asyncHandler(async(req,res)=>res.json(await Project.find().sort({featured:-1,createdAt:-1})));
export const getProjectById=asyncHandler(async(req,res)=>{const p=await Project.findById(req.params.id);if(!p){res.status(404);throw new Error('Project not found')}res.json(p)});
export const createProject=asyncHandler(async(req,res)=>res.status(201).json(await Project.create({...req.body,techStack:stack(req.body.techStack),featured:req.body.featured==='true'||req.body.featured===true})));
export const updateProject=asyncHandler(async(req,res)=>res.json(await Project.findByIdAndUpdate(req.params.id,{...req.body,techStack:req.body.techStack?stack(req.body.techStack):undefined},{new:true})));
export const deleteProject=asyncHandler(async(req,res)=>{await Project.findByIdAndDelete(req.params.id);res.json({message:'Project deleted'})});
