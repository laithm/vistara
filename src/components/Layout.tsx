// src/components/Layout.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans text-white bg-black">
      <nav className="flex sticky top-0 z-50 justify-between items-center px-6 py-4 w-full border-b backdrop-blur border-white/10 bg-black/90">
        {/* Shine effect on logo */}
        <motion.div
          initial={{ backgroundPosition: "200% 0" }}
          animate={{ backgroundPosition: "-200% 0" }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-yellow-400 to-white bg-[length:200%] bg-clip-text text-transparent"
        >
          <Link to="/">Vistara</Link>
        </motion.div>

        <div className="flex gap-6 text-sm font-medium">
          <Link to="/faq" className="transition hover:text-yellow-400">FAQ</Link>
          <Link to="/about" className="transition hover:text-yellow-400">About</Link>
        </div>
      </nav>

      <main className="px-6 py-12">{children}</main>
    </div>
  );
}
