import mongoose from "mongoose";
const connectDB=async()=>{try{if(!process.env.MONGO_URI){console.warn('MONGO_URI missing');return}const c=await mongoose.connect(process.env.MONGO_URI);console.log(`MongoDB connected: ${c.connection.host}`)}catch(e){console.error(e.message);process.exit(1)}};
export default connectDB;
