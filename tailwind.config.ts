import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      pink: "#E71575",
      gray: "##C4C4C4",
    },
    boxShadow: {
      small: "0px 4px 16px 0px rgba(0, 0, 0, 0.15)",
    },
    extend: {
      textColor: {
        DEFAULT: "#4A4A4A",
        primary: "#4A4A4A",
      },
      fontFamily: {
        roboto: ["var(--roboto-font)"],
      },
    },
  },
  plugins: [],
};
export default config;
