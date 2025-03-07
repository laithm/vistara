import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Portfolio from "./pages/Portfolio";
import Lequilibre from "./pages/Lequilibre";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-6">
        {/* Welcome Message */}
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Vistara
        </motion.h1>
        
        {/* Choose Destination */}
        <p className="text-lg mb-8">Choose your destination</p>
        
        {/* Destination Links */}
        <div className="flex gap-6">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/portfolio" className="btn btn-blue">
              Portfolio (To be made)
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/lequilibre" className="btn btn-green">
              L'Équilibre
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Define Routes */}
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/lequilibre" element={<Lequilibre />} />
      </Routes>
    </Router>
  );
}