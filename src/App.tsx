import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Layout from "./components/Layout";
import { motion } from "framer-motion";

// Homepage component, motion included, clean and modular
function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center px-6 w-full min-h-screen text-center text-white bg-black">
      <motion.h1
        className="mb-6 text-6xl font-extrabold"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Vistara
      </motion.h1>
      <p className="max-w-xl text-xl text-white">
        Engineering meets precision. From silicon to software, we build systems that matter.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>
    </Router>
  );
}
