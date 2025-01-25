import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Favorites from "./pages/Favorites"

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}
