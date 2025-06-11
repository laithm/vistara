import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col justify-center items-center px-6 w-full min-h-screen text-center text-white bg-black">
              <motion.h1
                className="mb-6 text-6xl font-extrabold"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Welcome to Vistara
              </motion.h1>
              <p className="mb-10 max-w-xl text-xl text-white">
                Engineering meets precision. From silicon to software, we build systems that matter.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/faq"
                  className="px-6 py-3 font-bold text-black bg-yellow-400 rounded-lg transition hover:scale-105 hover:opacity-90"
                >
                  FAQ
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 font-bold text-black bg-white rounded-lg transition hover:scale-105 hover:opacity-90"
                >
                  About
                </Link>
              </div>
            </div>
          }
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
