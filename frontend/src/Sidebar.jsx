  import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CandlestickChart,
  BrainCircuit,
  MessageSquare,
  Settings
} from "lucide-react";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 h-screen w-24 bg-[#090b15]/90 backdrop-blur-xl border-r border-zinc-800 flex flex-col items-center py-8"
    >
      <h1 className="text-3xl mb-14">🚀</h1>

      <div className="flex flex-col gap-8">

        <button className="text-cyan-400 hover:scale-110 transition">
          <LayoutDashboard size={28} />
        </button>

        <button className="text-zinc-500 hover:text-white hover:scale-110 transition">
          <CandlestickChart size={28} />
        </button>

        <button className="text-zinc-500 hover:text-white hover:scale-110 transition">
          <BrainCircuit size={28} />
        </button>

        <button className="text-zinc-500 hover:text-white hover:scale-110 transition">
          <MessageSquare size={28} />
        </button>

      </div>

      <div className="mt-auto">
        <Settings
          size={28}
          className="text-zinc-500 hover:text-white cursor-pointer"
        />
      </div>
    </motion.div>
  );
}