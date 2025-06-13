import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App.jsx";
import WalkThrough from "./pages/walkthrough.jsx";
import Player from "./pages/player.jsx";
import EventFeedPage from "./pages/eventfeedpage.jsx";
import Featured from "./pages/featured.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/walkthrough" element={<WalkThrough />} />
        <Route path="/player" element={<Player />} />
        <Route path="/eventfeedpage" element={<EventFeedPage />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
