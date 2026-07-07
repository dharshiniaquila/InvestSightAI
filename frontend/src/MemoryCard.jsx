import { motion } from "framer-motion";
import { FaBrain, FaChartLine } from "react-icons/fa";

export default function MemoryCard({
  stock,
  buy,
  sell,
  profit,
  insight,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8 shadow-lg"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">
          {stock}
        </h2>

        <FaChartLine className="text-cyan-400 text-2xl" />
      </div>

      <div className="mt-6 space-y-2 text-zinc-300">
        <p><strong>Buy:</strong> {buy}</p>
        <p><strong>Sell:</strong> {sell}</p>
        <p className="text-green-400 font-semibold">
          Profit: {profit}
        </p>
      </div>

      <div className="mt-6 flex gap-3">
        <FaBrain className="text-purple-400 mt-1" />

        <p className="text-zinc-400">
          {insight}
        </p>
      </div>
    </motion.div>
  );
}