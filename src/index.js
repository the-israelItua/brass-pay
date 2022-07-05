import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "utils/error-boundary";
import { defaultTheme as theme } from "styles/theme";
import GlobalStyles from "styles/global";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
        <ToastContainer />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
