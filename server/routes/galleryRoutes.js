import express from "express";import { createGalleryItem,deleteGalleryItem,getGalleryItems } from "../controllers/galleryController.js";import { protect } from "../middleware/authMiddleware.js";
const router=express.Router();router.route('/').get(getGalleryItems).post(protect,createGalleryItem);router.route('/:id').delete(protect,deleteGalleryItem);export default router;
