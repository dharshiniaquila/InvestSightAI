import { motion } from "framer-motion";

const steps = [
  "Enter Investment Details",
  "AI Simulates Returns",
  "Memory is Stored",
  "Receive AI Suggestions"
];

export default function HowItWorks() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-8">

      <h2 className="text-4xl font-bold text-center text-white mb-16">
        How It Works
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-8 text-center"
          >
            <div className="text-5xl font-bold text-purple-400 mb-5">
              {index + 1}
            </div>

            <p className="text-white font-medium">
              {step}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}