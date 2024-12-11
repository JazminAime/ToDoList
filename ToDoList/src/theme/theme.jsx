import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light", // o 'dark', según lo que desees como predeterminado
    useSystemColorMode: true,
  },
  colors: {
    custom: {
      greenPastel: "#B4D6CD",
      yellowPastel: "#FFDA76",
      pinkLight: "#FF8C9E",
      pinkBold: "#FF4E88",
    },
  },
});

export default theme;
