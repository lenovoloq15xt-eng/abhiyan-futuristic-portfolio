import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
const ThemeToggle=()=>{const{theme,toggleTheme}=useTheme();const Icon=theme==='dark'?Sun:Moon;return <button aria-label="Toggle theme" onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white light:text-slate-900"><Icon size={18}/></button>};
export default ThemeToggle;
