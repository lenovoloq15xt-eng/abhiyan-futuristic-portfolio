import mongoose from "mongoose";import bcrypt from "bcryptjs";
const schema=new mongoose.Schema({username:{type:String,required:true},email:{type:String,required:true,unique:true,lowercase:true},password:{type:String,required:true,minlength:8}},{timestamps:true});
schema.pre('save',async function(next){if(!this.isModified('password'))return next();this.password=await bcrypt.hash(this.password,12);next()});
schema.methods.matchPassword=function(p){return bcrypt.compare(p,this.password)};
export default mongoose.model('User',schema);
