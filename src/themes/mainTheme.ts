import {
  extendTheme,
  theme as baseTheme
} from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    text: "black",
    text_secondary: "#0000008a",
    primary: "#027dff",
    primary_skeleton: "#a0deff8a",
    secondary: "#ff8a80",
    secondary_skeleton: "#ff8a808a",
    placeholder: "#767676",
    error: {
      default: baseTheme.colors.red[700],
      hover: baseTheme.colors.red[800],
      active: baseTheme.colors.red[900],
    },
  },
  borders: {
    primary: "1px solid #f0f0f0",
  },
  shadows: {
    primary: "0 0 10px 0 #0000008a",
    secondary: "0 0 10px 0 #0000008a",
  },
  layerStyles: {
    primary_background: {
      background: "#f0f0f0"
    },
    secondary_background: {
      background: "#ffffff"
    },
    tertiary_background: {
      background: "#f1f1f1"
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
    mono: "Roboto, sans-serif",
  },
});

export default theme;