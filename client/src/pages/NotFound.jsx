import { Link } from "react-router-dom";
const NotFound=()=> <main className="grid min-h-screen place-items-center bg-void text-center"><div><p className="text-neon">404</p><h1 className="mt-4 text-5xl font-black text-white">Signal lost</h1><Link to="/" className="mt-8 inline-block rounded-full bg-neon px-6 py-3 font-black text-slate-950">Return Home</Link></div></main>;
export default NotFound;
