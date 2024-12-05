/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(
      //   {
      //   layout: {
      //     disabledOpacity: "0.3", // opacity-[0.3]
      //     radius: {
      //       small: "2px", // rounded-small
      //       medium: "4px", // rounded-medium
      //       large: "6px", // rounded-large
      //     },
      //     borderWidth: {
      //       small: "1px", // border-small
      //       medium: "1px", // border-medium
      //       large: "2px", // border-large
      //     },
      //   },
      //   themes: {
      //     light: {},
      //     dark: {},
      //   },
      // }
    ),
  ],
}

