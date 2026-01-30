
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// our global styles (we’ll create these)
import "./styles/variables.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

