import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Favorites from "./pages/Favorites"
import About from "./pages/About"

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
