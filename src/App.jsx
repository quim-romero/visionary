import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
        <Route path="/favorites" element={<h1>Favorites</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}
