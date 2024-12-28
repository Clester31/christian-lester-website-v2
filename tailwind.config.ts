import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue1: "var(--blue1)",
        blue2: "var(--blue2)",
        blue3: "var(--blue3)",
        tan1: "var(--tan1)",
        tan2: "var(--tan2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
