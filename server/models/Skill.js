import mongoose from "mongoose";
const schema=new mongoose.Schema({name:String,level:Number,category:String},{timestamps:true});
export default mongoose.model('Skill',schema);
