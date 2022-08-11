/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./layout/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm600: "600px",
        sm1: "700px",
        md1: "800px",
        md2: "900px",
        lg1: "1024px",
        lg2: "1200px",
        xl1: "1400px",
        xl2: "1500px",
        xl6: "1900px"
      },
      colors: () => ({
        themeBlue1: "#313EF7",
        themeCyan1: "#13E7FC",
        themeOrange1: "#FE7926",
        themeWhite1: "#E4E0FC",
        themeGreen1: "#196E86",
        buttonCyan: "#4676F5",
        themeViolet1: "#440496",
        themeBlue2: "rgba(6, 189, 196, 0.78)",
        themeBlue3: "#4629dd",
      }),
      boxShadow: {
        logCard: "0px 0px 10px 2px rgba(0, 0, 0, 0.5)",
        inputTheme: "0 5px 20px 3px rgb(49 62 247 / 25%)",
        whity: "0 0 5px 0 white",
      },
      spacing: {
        160: "40rem",
        200: "50rem",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "92-5%": "92.5%",
        "95-5%": "95.5%",
        "1k-px": "1000px",
        "23-rem": "23rem",
        "60-rem": "60rem",
        "20-rem": "20rem",
        "25-rem": "25rem",
        "30-rem": "30rem",
        "28-rem": "28rem",
        "30-rem": "30rem",
        "35-rem": "35rem",
        "40-rem": "40rem",
        "45-rem": "45rem",
      },
      animation: {
        float: "float 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "50%": {
            top: "60px",
          },
        },
      },
    },
  },
  plugins: [],
};
