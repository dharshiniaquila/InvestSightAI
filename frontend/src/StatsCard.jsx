import { motion } from "framer-motion";

export default function StatsCard({
  title,
  value,
  change,
  color
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6 backdrop-blur-xl"
    >
      <h3 className="text-zinc-400 text-sm">
        {title}
      </h3>

      <h1 className="text-3xl font-bold mt-3">
        {value}
      </h1>

      <p className={`mt-4 ${color}`}>
        {change}
      </p>
    </motion.div>
  );
}