import { Theme } from "@emotion/react";
import { createTheme, PaletteMode, responsiveFontSizes } from "@mui/material";
import {
  common,
  error,
  info,
  primary,
  secondary,
  success,
  warning,
} from "./colors";

const fontFamily = ["Ubuntu", "Arial"].join(",");
const getTheme = (mode: PaletteMode = "dark"): Theme => {
  let theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary,
        secondary,
        common,
        success,
        warning,
        error,
        info,
      },
      shape: {
        borderRadius: 2.5,
      },
      typography: {
        fontFamily,
        fontSize: 12,
        subtitle1: {
          letterSpacing: "1.5px",
        },
        subtitle2: {
          letterSpacing: "1.6px",
        },
        h6: {
          fontSize: "1.2rem",
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            html: {
              WebkitFontSmoothing: "auto",
              scrollBehavior: "smooth",
              fontFamily: fontFamily,
            },
            body: {
              fontFamily: fontFamily,
              width: "100vw",
              height: "100vh",
              boxSizing: "border-box",
            },
          `,
        },
        MuiOutlinedInput: {
          styleOverrides: {
            input: {
              paddingRight: "0",
            },
          },
        },
        MuiSnackbarContent: {
          styleOverrides: {
            root: {
              padding: "0px",
              paddingRight: "2em",
              paddingLeft: "2em",
            },
          },
        },
        MuiButton: {
          defaultProps: {
            variant: "contained",
            color: "primary",
            disableElevation: false,
            disableRipple: false,
            size: "medium",
          },
        },
        MuiTextField: {
          defaultProps: {
            variant: "outlined",
            color: "primary",
            fullWidth: true,
            size: "small",
          },
        },
        MuiTypography: {
          defaultProps: {
            color: "textPrimary",
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              height: "80px",
              lineHeight: "80px",
            },
            colorPrimary: {
              backgroundColor: primary.light,
            },
          },
        },
        MuiContainer: {
          styleOverrides: {
            root: {
              padding: "10px",
              marginTop: "10px",
              backgroundColor: primary.light,
            },
          },
        },
      },
    })
  );

  // theme = {
  //   ...theme,
  //   typography: {
  //     ...theme.typography,
  //     h1: {
  //       fontFamily,
  //       fontSize: "5.2em",
  //       [theme.breakpoints.down("md")]: {
  //         fontSize: "4.5em",
  //       },
  //     },
  //   },
  //   components: {
  //     ...theme.components,
  //     MuiAppBar: {
  //       variants: [
  //         {
  //           style: {
  //             backgroundColor: theme.palette.primary.dark,
  //           },
  //           props: {},
  //         },
  //       ],
  //     },
  //   },
  // };
  return theme;
};

export default getTheme;
