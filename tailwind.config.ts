import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#201A13",
        caution: "#F2B705",
        ember: "#E24E1B",
        pine: "#2F6B4F",
        paper: "#F6EFDD",
        water: "#2E86AB",
      },
      fontFamily: {
        display: ["var(--font-bungee)"],
        body: ["var(--font-grotesk)"],
        scribble: ["var(--font-caveat)"],
      },
      boxShadow: {
        hard: "6px 6px 0 #201A13",
        "hard-sm": "3px 3px 0 #201A13",
        "hard-lg": "10px 10px 0 #201A13",
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "12%": { opacity: "0.9" },
          "85%": { opacity: "0.5" },
          "100%": { transform: "translateY(-70vh)", opacity: "0" },
        },
        stamp: {
          "0%": { transform: "scale(2.4) rotate(-18deg)", opacity: "0" },
          "60%": { transform: "scale(0.94) rotate(-6deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(-6deg)", opacity: "1" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-6px) rotate(-1deg)" },
          "40%": { transform: "translateX(6px) rotate(1deg)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        "soft-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "smoke-rise": {
          "0%": { transform: "translate(-50%, 0) scale(0.6)", opacity: "0" },
          "15%": { opacity: "0.55" },
          "60%": { opacity: "0.35" },
          "100%": { transform: "translate(-50%, -60px) scale(1.6)", opacity: "0" },
        },
        "haze-drift": {
          "0%": { transform: "translateX(-6%)" },
          "50%": { transform: "translateX(6%)" },
          "100%": { transform: "translateX(-6%)" },
        },
      },
      animation: {
        rise: "rise linear infinite",
        stamp: "stamp 0.5s cubic-bezier(0.2,1.6,0.4,1) forwards",
        shake: "shake 0.4s ease-in-out",
        "soft-bounce": "soft-bounce 2.2s ease-in-out infinite",
        "smoke-rise": "smoke-rise 2.6s ease-out infinite",
        "haze-drift": "haze-drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
