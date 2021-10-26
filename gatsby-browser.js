import React from "react";
import { SnackbarContainer, ThemeContainer } from "./src/context";
export const wrapRootElement = ({ element }) => (
  <ThemeContainer>
    <SnackbarContainer>{element}</SnackbarContainer>
  </ThemeContainer>
);
