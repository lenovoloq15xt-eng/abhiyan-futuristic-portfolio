import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
const links=[["About","#about"],["Skills","#skills"],["Projects","#projects"],["Art","#gallery"],["Contact","#contact"]];
const Navbar=()=> <header className="fixed left-0 right-0 top-4 z-50 px-4"><nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3"><a href="#hero" className="font-black tracking-[.22em] text-white light:text-slate-950">ABHIYAN</a><div className="hidden items-center gap-7 md:flex">{links.map(([l,h])=><a key={h} href={h} className="text-sm text-white/[.68] light:text-slate-700">{l}</a>)}<Link to="/admin" className="text-sm text-white/[.68] light:text-slate-700">Admin</Link><ThemeToggle/></div></nav></header>;
export default Navbar;
