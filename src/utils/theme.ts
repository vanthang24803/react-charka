import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
      heading: `'Domine Variable', serif`,
      body: `'Domine Variable', serif`,
    },
    colors: {
      primary: {
        400: "#00917b",
        300: "#4bd8c8",
        200: "#e0f5f0",
        100: "#e8f8fa",
      },
    },
  });

  
export default theme;