import nodemailer from "nodemailer";
export const createTransporter=()=>!process.env.MAIL_HOST||!process.env.MAIL_USER||!process.env.MAIL_PASS?null:nodemailer.createTransport({host:process.env.MAIL_HOST,port:Number(process.env.MAIL_PORT||587),secure:process.env.MAIL_SECURE==='true',auth:{user:process.env.MAIL_USER,pass:process.env.MAIL_PASS}});
