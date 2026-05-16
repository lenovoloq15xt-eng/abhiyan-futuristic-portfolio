import mongoose from "mongoose";
const schema=new mongoose.Schema({title:String,description:String,image:String,techStack:[String],githubLink:String,liveLink:String,category:String,featured:{type:Boolean,default:false}},{timestamps:true});
export default mongoose.model('Project',schema);
