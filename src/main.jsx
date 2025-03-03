
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Template from "./pages/Template.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Template/>
  
  </StrictMode>
);
