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
        bob: {
          dark: '#0F0A4D',
          orange: '#FF802F',
          blue: '#175CFF',
          yellow: '#FED519',
          gray: '#B1B1B1',
          light: '#F5F5F5',
        },
        social: {
          fb: '#4267B2',
          ig: '#C13584',
          tw: '#1DA1F2',
          wb: '#4285F4',
          wa: '#25D366',
        },
      },
    },
  },
  plugins: [],
};
export default config;
