import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "rgba(10,10,10,.86)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,.12)",
              backdropFilter: "blur(16px)"
            }
          }}
        />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

