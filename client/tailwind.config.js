/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#0a0a0a",
        neon: "#00d9ff",
        violet: "#8b5cf6",
        ink: "#f8fafc"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(0,217,255,0.28)",
        violet: "0 0 42px rgba(139,92,246,0.26)"
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0,217,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)",
        "aurora": "radial-gradient(circle at 20% 20%, rgba(0,217,255,.28), transparent 28%), radial-gradient(circle at 80% 15%, rgba(139,92,246,.28), transparent 30%), radial-gradient(circle at 50% 90%, rgba(20,184,166,.16), transparent 35%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.55 },
          "50%": { opacity: 1 }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 12s ease infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite"
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("light", ".light &");
    }
  ]
};
