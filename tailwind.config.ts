import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "tide-ink": "#102A36",
        "tidal-teal": "#006B6E",
        "tidal-teal-dark": "#005155",
        "sea-glass": "#D4E9E6",
        paper: "#FBF7EF",
        "paper-deep": "#EEE6D7",
        "copper-sand": "#A65F2A",
        charcoal: "#23313A",
        mist: "#F1F5F1",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
