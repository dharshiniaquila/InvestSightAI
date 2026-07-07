import { motion } from "framer-motion";
import HeroGraph from "./HeroGraph";
import InvestmentForm from "./InvestmentForm";
import MarketCards from "./MarketCards";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between max-w-7xl mx-auto px-10 pt-28">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >
        <p className="uppercase tracking-[8px] text-purple-400 mb-5">
          AI Powered Investment Simulator
        </p>

        <h1 className="text-6xl font-extrabold text-white leading-tight">
          Invest Smarter
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            With AI Memory
          </span>
        </h1>

        <p className="text-zinc-400 text-lg mt-8 leading-8">
          Analyze historical investments,
          remember previous strategies,
          and receive AI-powered insights
          before making your next move.
        </p>

        <HeroGraph />

        <MarketCards />
      </motion.div>

      {/* Right Side */}
      <InvestmentForm />
    </section>
  );
}