import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
