import cloudinary from "../config/cloudinary.js";
const uploadToCloudinary=(buffer,folder='abhiyan-portfolio')=>new Promise((resolve,reject)=>{const s=cloudinary.uploader.upload_stream({folder,resource_type:'image'},(e,r)=>e?reject(e):resolve(r));s.end(buffer)});
export default uploadToCloudinary;
