import { createRoot, ReactDOM } from "react-dom/client";
import App from "./App";
import React from "react";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
