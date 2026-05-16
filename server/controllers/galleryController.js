import asyncHandler from "express-async-handler";import Gallery from "../models/Gallery.js";
export const getGalleryItems=asyncHandler(async(req,res)=>res.json(await Gallery.find().sort({createdAt:-1})));
export const createGalleryItem=asyncHandler(async(req,res)=>res.status(201).json(await Gallery.create(req.body)));
export const deleteGalleryItem=asyncHandler(async(req,res)=>{await Gallery.findByIdAndDelete(req.params.id);res.json({message:'Artwork deleted'})});
