import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Portfolio from "./pages/Portfolio";
import Lequilibre from "./pages/Lequilibre";
import Login from "./pages/Login";
import LoginL from "./pages/LoginL";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🟢 Landing Page */}
        <Route
  path="/"
  element={
    <div className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
      {/* Main Centered Section */}
      <div className="text-center max-w-3xl">
        <motion.h1
          className="text-6xl sm:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Vistara
        </motion.h1>
        <p className="text-xl text-gray-300 max-w-xl mx-auto">
          Engineering meets precision. From silicon to software, we build systems that matter.
        </p>
      </div>

      {/* Bottom Left Navigation */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-2">
        <a href="#faq" className="btn btn-yellow w-fit">FAQ</a>
        <a href="#about" className="btn btn-white text-black w-fit">About</a>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="absolute bottom-0 left-0 w-full bg-gray-800 px-6 py-10 border-t border-gray-700">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">What is Vistara?</h3>
              <p className="text-gray-400">
                Vistara is an engineering and research collective focused on embedded systems, quant finance, and scalable architecture.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Who is behind it?</h3>
              <p className="text-gray-400">
                Founded by Laith Masri, Vistara blends industry-grade engineering with relentless learning and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="absolute bottom-0 right-0 w-full bg-gray-950 px-6 py-10 border-t border-gray-800">
        <div className="max-w-3xl ml-auto">
          <h2 className="text-3xl font-bold mb-4">About Vistara</h2>
          <p className="text-gray-400">
            We operate at the intersection of circuits, code, and capital. Vistara builds full-stack tools, custom devices, and alpha-driven infrastructure.
          </p>
        </div>
      </section>
    </div>
  }
/>


        {/* 🔒 Other Pages */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/lequilibre" element={<Lequilibre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lequilibre/login" element={<LoginL />} />
        <Route path="/lequilibre/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
