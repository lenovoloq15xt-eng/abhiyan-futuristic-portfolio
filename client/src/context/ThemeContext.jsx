import { createContext, useContext, useEffect, useMemo, useState } from "react";
const ThemeContext=createContext(null);
export const ThemeProvider=({children})=>{const[theme,setTheme]=useState(()=>localStorage.getItem('abhiyan_theme')||'dark');useEffect(()=>{const light=theme==='light';document.documentElement.classList.toggle('light',light);document.documentElement.classList.toggle('dark',!light);document.body.classList.toggle('light',light);localStorage.setItem('abhiyan_theme',theme)},[theme]);const value=useMemo(()=>({theme,toggleTheme:()=>setTheme(t=>t==='dark'?'light':'dark')}),[theme]);return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>};
export const useTheme=()=>useContext(ThemeContext);
