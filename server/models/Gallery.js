import mongoose from "mongoose";
const schema=new mongoose.Schema({image:String,title:String,category:String},{timestamps:true});
export default mongoose.model('Gallery',schema);
