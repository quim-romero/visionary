import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Favorites = lazy(() => import("./pages/Favorites"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CuratorView = lazy(() => import("./pages/CuratorView"));

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export default function App() {
  const location = useLocation();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only absolute top-0 left-0 z-50 bg-black text-white p-2"
      >
        Skip to main content
      </a>

      <Navbar />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.main id="main" {...pageTransition}>
                  <Home />
                </motion.main>
              }
            />
            <Route
              path="/gallery"
              element={
                <motion.main id="main" {...pageTransition}>
                  <Gallery />
                </motion.main>
              }
            />
            <Route
              path="/favorites"
              element={
                <motion.main id="main" {...pageTransition}>
                  <Favorites />
                </motion.main>
              }
            />
            <Route
              path="/about"
              element={
                <motion.main id="main" {...pageTransition}>
                  <About />
                </motion.main>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.main id="main" {...pageTransition}>
                  <Contact />
                </motion.main>
              }
            />
            <Route
              path="/curator"
              element={
                <motion.main id="main" {...pageTransition}>
                  <CuratorView />
                </motion.main>
              }
            />
            <Route
              path="*"
              element={
                <motion.main id="main" {...pageTransition}>
                  <h1 className="text-center text-3xl mt-40">Not Found</h1>
                </motion.main>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <Footer />
    </>
  );
}
