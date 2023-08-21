import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent--soft-orange": "hsl(35, 77%, 62%)",
        "accent--soft-red": "hsl(5, 85%, 63%)",
        "neutral--off-white": "hsl(36, 100%, 99%)",
        "neutral--grayish-blue": "hsl(233, 8%, 79%)",
        "neutral--dark-grayish-blue": "hsl(236, 13%, 42%)",
        "neutral--very-dark-blue": "hsl(240, 100%, 5%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
