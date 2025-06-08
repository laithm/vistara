import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="bg-gray-900 text-white h-screen w-full flex flex-col items-center justify-center text-center px-6">
              <motion.h1
                className="text-6xl font-extrabold mb-6"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Welcome to Vistara
              </motion.h1>
              <p className="text-xl text-gray-300 mb-10 max-w-xl">
                Engineering meets precision. From silicon to software, we build systems that matter.
              </p>
              <div className="flex gap-4">
                <Link to="/faq" className="btn btn-yellow">FAQ</Link>
                <Link to="/about" className="btn btn-white text-black">About</Link>
              </div>
            </div>
          }
        />

        {/* FAQ and About Routes */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
