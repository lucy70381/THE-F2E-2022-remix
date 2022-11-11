/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./app/styles/app.css"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "80px",
      },
    },
    colors: {
      'primary': {
        default: "#007FAB",
        dark: "#003A4F",
        tint: "#003A4F",
      },
      'secondary': {
        default: "#FFC37D",
        dark: "#FFC37D",
        tint: "#FFC37D",
      },
      'highlight': {
        default: "#FF5136",
        dark: "#CD331A",
        tint: "#FFB5A4",
      },
      'black': {
        default: "#000000",
        20: "#333333",
        40: "#666666",
        60: "#999999",
        80: "#CCCCCC",
      },
      'white': "#FFFFFF",
    },
    content: {
      start: "url('/main/start.png')",
    },
    extend: {
      backgroundImage: {
        logo: "url('/logo/logo.png')",
        logo_text: "url('/logo/logo_text.png')",
        start: "url('/main/start.png')",
        road: "url('/main/road.png')",
        character_ui: "url('/character_ui/character_ui.gif')",
        character_f2e: "url('/character_ui/character_f2e.gif')",
        character_team: "url('/character_ui/character_team.gif')",
        bg_talking: "url('/bg/bg_talking.png')",
        bg_talking_c: "url('/bg/bg_talking_c.png')",
        bg_talking_l: "url('/bg/bg_talking_l.png')",
        bg_talking_r: "url('/bg/bg_talking_r.png')",
      },
      backgroundSize: {
        'height-72': "100% 72px",
      },
    },
  },
  plugins: [],
};
