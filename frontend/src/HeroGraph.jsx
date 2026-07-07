import { motion } from "framer-motion";

export default function HeroGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-white text-xl font-bold">
            Market Trend
          </h3>

          <p className="text-zinc-400 text-sm">
            Historical Growth Simulation
          </p>
        </div>

        <span className="text-green-400 font-bold text-lg">
          +18.42%
        </span>
      </div>

      <svg
        viewBox="0 0 600 220"
        className="w-full h-56"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0 180
             C80 160 120 120 180 135
             C240 150 260 70 320 95
             C390 125 430 40 510 65
             C560 82 590 30 600 45"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
  );
}