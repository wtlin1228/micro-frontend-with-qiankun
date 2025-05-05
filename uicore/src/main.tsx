import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MicroApps } from "./micro-apps.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <MicroApps />
  </StrictMode>
);
