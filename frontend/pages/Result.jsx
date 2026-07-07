import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaChartLine,
  FaBrain,
  FaMoneyBillWave,
} from "react-icons/fa";

import ResultChart from "../components/ResultChart";
import InsightCard from "../components/InsightCard";

export default function Result() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#050816] text-white px-10 py-10">

      {/* Back Button */}
     <button
  onClick={() => navigate(-1)}
  className="flex items-center gap-3 text-zinc-400 hover:text-white mb-10"
>
  <FaArrowLeft />
  Back
</button>
<button
  onClick={() => navigate("/dashboard")}
  className="mt-8 px-6 py-3 bg-purple-600 rounded-xl"
>
  Open Dashboard →
</button>
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-5xl font-bold"
      >
        Investment Results
      </motion.h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        {/* Profit */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8">
          <FaMoneyBillWave className="text-green-400 text-3xl" />

          <h2 className="mt-5 text-zinc-400">
            Profit
          </h2>

          <h1 className="text-5xl font-bold mt-3">
            ₹18,450
          </h1>

          <p className="text-green-400 mt-4">
            +18.45%
          </p>
        </div>

        {/* Alternative Profit */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8">
          <FaChartLine className="text-cyan-400 text-3xl" />

          <h2 className="mt-5 text-zinc-400">
            Alternative Profit
          </h2>

          <h1 className="text-5xl font-bold mt-3">
            ₹24,900
          </h1>

          <p className="text-cyan-400 mt-4">
            +24.90%
          </p>
        </div>

        {/* AI Confidence */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8">
          <FaBrain className="text-purple-400 text-3xl" />

          <h2 className="mt-5 text-zinc-400">
            AI Confidence
          </h2>

          <h1 className="text-5xl font-bold mt-3">
            94%
          </h1>

          <p className="text-purple-400 mt-4">
            High Confidence
          </p>
        </div>

      </div>

      {/* Graph */}
      <ResultChart />

      {/* AI Insight */}
      <InsightCard />

    </div>
  );
}