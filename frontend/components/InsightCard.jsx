import { FaBrain } from "react-icons/fa";

export default function InsightCard() {
  return (
    <div className="rounded-3xl mt-10 bg-zinc-900/60 border border-zinc-800 p-8">
      <div className="flex items-center gap-4">
        <FaBrain className="text-purple-400 text-3xl" />

        <h2 className="text-2xl font-bold">
          AI Insight
        </h2>
      </div>

      <p className="text-zinc-300 leading-8 mt-6">
        Across your previous simulations, you usually sell technology stocks
        within three months.

        Holding them longer would have increased returns by nearly 18%.
      </p>
    </div>
  );
}