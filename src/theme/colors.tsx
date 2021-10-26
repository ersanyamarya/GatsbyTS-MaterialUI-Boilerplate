import { SimplePaletteColorOptions, lighten, darken } from "@mui/material";

export const primary: SimplePaletteColorOptions = {
  main: "#99cc00",
  dark: darken("#99cc00", 0.9),
  light: "#99cc00",
};

export const secondary: SimplePaletteColorOptions = {
  main: "#333333",
  dark: darken("#333333", 0.9),
  light: lighten("#333333", 0.9),
};

export const common = {
  black: "#333",
  white: "#FAFBFF",
};

export const success: SimplePaletteColorOptions = {
  main: "#3CC13B",
  light: lighten("#3CC13B", 0.9),
};
export const warning: SimplePaletteColorOptions = {
  main: "#F3BB1C",
  light: lighten("#F3BB1C", 0.9),
};
export const error: SimplePaletteColorOptions = {
  main: "#f44444",
  light: lighten("#f44444", 0.9),
};
export const info: SimplePaletteColorOptions = {
  main: "#3CC13B",
  light: lighten("#3CC13B", 0.9),
};
export const primaryGradient = `linear-gradient(45deg, ${primary.main} 30%, ${secondary.main}  90%)`;
