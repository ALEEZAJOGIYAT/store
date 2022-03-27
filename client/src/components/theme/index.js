import React, { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import {MdToggleOn} from 'react-icons'

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#000000",
      // default: "#222222"
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export const Theme = () => {
  const [light, setLight] = useState(true);

  return (
    <div>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
        <Button  onClick={() => setLight((prev) => !prev)}>Change Theme</Button>
      </ThemeProvider>
    </div>
  );
};
