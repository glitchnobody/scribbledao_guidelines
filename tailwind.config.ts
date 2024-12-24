import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#FFFFFF",
          light: "#151320",
        },
        muted: "#000000",
        lime: "#D5F379",
        green: "#09412E",
        purple: "#B185E7",
        blue: "#399BDF",
        pink: "#DF447F",
      },
      fontFamily: {
        sans: ["Fredoka", "sans-serif"],
        handwriting: ["Borel", "sans-serif"],
        mono: ["Pixelify Sans", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
