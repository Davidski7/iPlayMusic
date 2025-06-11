import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App.jsx";
import WalkThrough from "./pages/walkthrough.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/walkthrough" element={<WalkThrough />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
