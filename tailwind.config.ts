import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          xl: "0",
          "2xl": "0",
        },
      },
      maxWidth: {
        "282": "282px",
      },
      minWidth: {
        "282": "282px",
      },
      maxHeight: {
        "282": "282px",
      },
      minHeight: {
        "282": "282px",
      },
      // Screen
      screens: {
        // Tablet
        // sm: "640px",
        // => @media (min-width: 640px) { ... }
        // Laptop
        // lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        // Desktop
        xl: "1280px",
        // => @media (min-width: 1200px) { ... }
        // Desktop PC
        "2xl": "1440px",
        // => @media (min-width: 1200px) { ... }
      },
      fontSize: {
        fs10: "10px",
        fs15: "15px",
        fs28: "1.75rem",
      },
      colors: {
        secondary: "#7A7A7A",
        yellow: "rgba(255, 196, 83, 1)",
        mainFF: "#FFF",
        main20: "#202223",
        main2E: "#2E9ED5",
        main7A: "#7A7A7A",
        main8C: "#8C9196",
        mainF2: "#F23611",
        main00: "#000",
        mainF4: "#F4F4F4",
        mainF6: "#F60",
        mainEF: "#EFEFEF",
        black1C: "#1C2436",
        gray5B: "#5B616E",
        gray61: "#616161",
        orangeFF: "#FF6600",
        red: "#F6484F"
      },
      backgroundImage: {
        main: "linear-gradient(185deg, #F7941D 0%, #F79620 35.00%, #F89F2B 67.00%, #FAAE3E 97.00%, #FBB040 100%)",
        "linear-secondary": "linear-gradient(270deg, #FF2E00 0%, #EC9F05 100%)",
      },
      backgroundSize: {
        "100%": "100%",
      },
      backgroundColor: {
        orangeFF: "#FF6600",
      },
      boxShadow: {
        gray: "-1px -1px 0px 0px #F2F2F2 inset, 1px 1px 0px 0px #F2F2F2 inset",
      },
      borderColor: {
        orangeFF: "#FF6600",
      },
    },
    plugins: [],
  },
};

export default config;
