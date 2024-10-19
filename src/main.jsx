import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext.jsx";
import { JonglerieProvider } from "./contexts/jonglerieContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <JonglerieProvider>
          <App />
        </JonglerieProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
