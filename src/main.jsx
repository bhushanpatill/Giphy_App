import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyle } from "./Styles/GlobalStyle.jsx";
import { ThemeProvider } from "./Context/themeContext.jsx";
import { GlobalProvider } from "./Context/Global.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <App /> */}
    {/* <ThemeProvider>
      <App/>
    </ThemeProvider> */}
    <GlobalProvider>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
    </GlobalProvider>
    
  </React.StrictMode>
);
