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
            <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
              <div className="flex flex-col items-center justify-center py-20 px-6">
                <motion.h1
                  className="text-5xl font-extrabold mb-4 text-center"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Welcome to Vistara
                </motion.h1>

                <p className="text-lg mb-8 text-center">
                  Engineering. Research. Vision. Choose your destination:
                </p>

                {/* 🔗 Horizontal Button Layout */}
                <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center mb-16">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Link to="/portfolio" className="btn btn-blue">
                      Portfolio
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Link to="/lequilibre" className="btn btn-green">
                      L'Équilibre
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Link to="/login" className="btn btn-purple">
                      Admin Login
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <a href="#faq" className="btn btn-yellow">
                      FAQ
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <a href="#about" className="btn btn-white text-black">
                      About
                    </a>
                  </motion.div>
                </div>

                {/* 🟡 FAQ Section */}
                <section id="faq" className="w-full max-w-3xl mb-20">
                  <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-4 text-left">
                    <div>
                      <h3 className="font-semibold text-lg">What is Vistara?</h3>
                      <p className="text-gray-300">
                        Vistara is an engineering and research collective focused on software, hardware, and trading infrastructure.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Who is it for?</h3>
                      <p className="text-gray-300">
                        Researchers, founders, traders, and anyone who demands performance and precision.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">How do I collaborate?</h3>
                      <p className="text-gray-300">
                        Use the dashboard, inquiry form (coming soon), or DM Laith directly if you're serious.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 🔵 About Section */}
                <section id="about" className="w-full max-w-3xl pb-32">
                  <h2 className="text-3xl font-bold mb-4">About Vistara</h2>
                  <p className="text-gray-300">
                    Founded by Laith Masri, Vistara is a project-first collective merging elite software engineering,
                    embedded systems, and quant infrastructure. We don’t just build — we ship high-performance, scalable systems
                    that make an impact.
                  </p>
                </section>
              </div>
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
