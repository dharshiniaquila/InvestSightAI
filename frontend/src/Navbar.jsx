import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div className="flex items-center gap-3">
          <FaChartLine className="text-purple-500 text-3xl" />
          <h1 className="text-2xl font-bold text-white">
            InvestSight AI
          </h1>
        </div>

        <div className="flex gap-8 text-zinc-300">

          <Link to="/" className="hover:text-white">
            Home
          </Link>

          <Link to="/dashboard" className="hover:text-white">
            Dashboard
          </Link>

          <Link to="/memory" className="hover:text-white">
            Memory
          </Link>

          <Link to="/chat" className="hover:text-white">
            AI Chat
          </Link>

        </div>

      </div>
    </motion.nav>
  );
}