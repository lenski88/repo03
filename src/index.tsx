import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const container = document.getElementById("root")! ;
ReactDOM.createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
