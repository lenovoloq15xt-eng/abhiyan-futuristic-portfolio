export const notFound=(req,res,next)=>{res.status(404);next(new Error(`Not found: ${req.originalUrl}`))};
export const errorHandler=(err,req,res,next)=>{res.status(res.statusCode===200?500:res.statusCode).json({message:err.message,stack:process.env.NODE_ENV==='production'?undefined:err.stack})};
