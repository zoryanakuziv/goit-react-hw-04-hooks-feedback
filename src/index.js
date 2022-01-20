import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";

import "./index.css";
import App from "./components/App/App";

const theme = {
  colors: {
    green: "#00FF00",
    red: "#ff0000",
    orange: "#ffa500",
    grey: "#808080",
    lightGrey: "#d3d3d3",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
