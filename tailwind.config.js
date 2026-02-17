/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#0a0e27",
        lightText: "#e2e8f0",
        boxBg: "linear-gradient(145deg, #0f1430, #1a1f3a)",
        designColor: "#6366f1",
        accentColor: "#8b5cf6",
        gradientStart: "#6366f1",
        gradientEnd: "#8b5cf6",
        cardBg: "#1a1f3a",
        cardHover: "#252d4a",
      },
      boxShadow: {
        shadowOne: "10px 10px 30px rgba(0,0,0,0.3), -10px -10px 30px rgba(99,102,241,0.05)",
        shadowTwo: "0 20px 60px rgba(99,102,241,0.2)",
        glowPurple: "0 0 20px rgba(139,92,246,0.4)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-card': 'linear-gradient(145deg, #1a1f3a, #252d4a)',
      },
    },
  },
  plugins: [],
};
