import { FaBrain, FaChartLine, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBrain size={30} />,
    title: "AI Memory",
    desc: "Stores every investment simulation and retrieves similar decisions using Hindsight."
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Historical Analysis",
    desc: "Compare your investments with real historical stock performance."
  },
  {
    icon: <FaRobot size={30} />,
    title: "Smart AI Insights",
    desc: "Receive personalized recommendations before investing."
  }
];

export default function FeatureSection() {
  return (
    <section className="max-w-7xl mx-auto py-28 px-8">

      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Why Choose <span className="text-purple-400">InvestSight AI</span>?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-8 shadow-lg"
          >

            <div className="text-purple-400 mb-5">
              {item.icon}
            </div>

            <h3 className="text-2xl text-white font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-zinc-400">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}