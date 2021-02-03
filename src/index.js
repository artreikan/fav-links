import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  min-height: 100vh;
  background-color: #212121;
  color: #fff;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

a {
  color: #fff;

  &:hover {
    color: #fff;
  }
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
