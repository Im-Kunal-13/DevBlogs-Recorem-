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
        xl6: "1900px",
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
        inputBg: "#E9EEF3",
      }),
      boxShadow: {
        logCard: "0px 0px 10px 2px rgba(0, 0, 0, 0.5)",
        black1: "0px 0px 10px 1px rgba(0, 0, 0, 0.5)",
        dotCyan: "0px 0px 10px 1px #13E7FC",
        dotBlue: "0px 0px 10px 1px #313EF7",
        dotViolet: "0px 0px 10px 1px #440496",
        inputTheme: "0 5px 20px 3px rgb(49 62 247 / 25%)",
        whity: "0 0 5px 0 white",
        searchInput: "0 5px 50px 0px rgba(0, 0 ,0, .2)",
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
        "13.5-rem": "13.5rem",
        "17.5-rem": "17.5rem",
        "23-rem": "23rem",
        "20-rem": "20rem",
        "25-rem": "25rem",
        "30-rem": "30rem",
        "28-rem": "28rem",
        "30-rem": "30rem",
        "35-rem": "35rem",
        "40-rem": "40rem",
        "45-rem": "45rem",
        "50-rem": "50rem",
        "55-rem": "55rem",
        "60-rem": "60rem",
      },
      animation: {
        float: "float 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float1: "float1 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float2: "float2 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "50%": {
            top: "60px",
          },
        },
        float1: {
          "50%": {
            bottom: "210px",
          },
        },
        float2: {
          "50%": {
            top: "90px",
          },
        },
      },
    },
  },
  plugins: [],
};
