import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#fafafa", dark: "#121212" },
        surface: { DEFAULT: "#ffffff", dark: "#1a1a1a" },
        surfaceHover: { DEFAULT: "#f0f0f0", dark: "#212121" },
        borderc: { DEFAULT: "rgba(0,0,0,0.14)", dark: "rgba(255,255,255,0.08)" },
        borderStrong: { DEFAULT: "rgba(0,0,0,0.32)", dark: "rgba(255,255,255,0.2)" },
        textPrimary: { DEFAULT: "#121212", dark: "#f2f2f2" },
        textSecondary: { DEFAULT: "#5c5c5c", dark: "#9e9e9e" },
        textMuted: { DEFAULT: "#8a8a8a", dark: "#6b6b6b" },
      },
      fontFamily: {
        sans: ["Geist", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,1,.36,1)",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      maxWidth: {
        shell: "680px",
      },
    },
  },
  plugins: [],
};
export default config;
