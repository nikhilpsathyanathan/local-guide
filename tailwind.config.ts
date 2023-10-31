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
      pink: "#E71575",
      gray: "##C4C4C4",
    },
    extend: {
      textColor: {
        DEFAULT: "##4A4A4A",
      },
      boxShadow: {
        small: "0px 4px 16px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
