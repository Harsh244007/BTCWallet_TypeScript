import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MainContextProvider } from "./Configs/Context/mainContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <MainContextProvider>
    <App />
  </MainContextProvider>
);
