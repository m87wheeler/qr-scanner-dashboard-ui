import { ITheme } from "../../types";

export const theme: ITheme = {
  palette: {
    primary: {
      _: "#181923",
      contrast: "#fff",
    },
    secondary: {
      _: "#86ccd3",
      contrast: "#181923",
    },
    white: {
      _: "#fff",
      contrast: "#181923",
    },
    black: {
      _: "#181923",
      contrast: "#fff",
    },
  },
  font: {
    family: {
      sans: `'Poppins', sans-serif`,
    },
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
};
