import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg0: "#070A12",
        bg1: "#0B1020",
        surface: "rgba(255,255,255,0.07)",
        surface2: "rgba(255,255,255,0.10)",
        border: "rgba(255,255,255,0.12)",
        border2: "rgba(255,255,255,0.18)",
        text1: "rgba(255,255,255,0.92)",
        text2: "rgba(255,255,255,0.72)",
        muted: "rgba(255,255,255,0.55)",
        magenta: "#EC407A",
        hotpink: "#E91E63",
        purple: "#9C27B0",
        deepPurple: "#6A1B9A",
        gold: "#D4AF37",
      },
      fontFamily: {
        display: ["Space Grotesk", "Montserrat", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,0.35)",
        glowMagenta: "0 0 35px rgba(236,64,122,0.30)",
        glowPurple: "0 0 35px rgba(156,39,176,0.28)",
      },
      backgroundImage: {
        hero: "radial-gradient(1200px 600px at 20% 10%, rgba(236,64,122,0.18), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(156,39,176,0.16), transparent 55%), linear-gradient(135deg, #070A12 0%, #0B1020 50%, #070A12 100%)",
        energy: "linear-gradient(90deg, rgba(236,64,122,0.0) 0%, rgba(236,64,122,0.35) 45%, rgba(156,39,176,0.35) 55%, rgba(156,39,176,0.0) 100%)",
      },
      keyframes: {
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(140%)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        sheen: "sheen 1.25s ease-in-out",
        ticker: "ticker 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
