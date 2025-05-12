import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./assets/App";
import "./main.css";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
