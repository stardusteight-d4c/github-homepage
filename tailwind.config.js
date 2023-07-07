/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smsm: "380px",
      ssm: "400px",
      smm: "500px",
      sm: "640px",
      md: "768px",
      mdd: "900px",
      lg: "1024px",
      lgg: "1130px",
      lx: "1200px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        'scale-up': 'scale-up 5s infinite',
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.5)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      backgroundImage: {
        hero: "url(/hero-bg.webp)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
}
