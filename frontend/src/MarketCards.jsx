  import { motion } from "framer-motion";

const stocks = [
  { name: "AAPL", change: "+4.3%" },
  { name: "NVDA", change: "+12.8%" },
  { name: "MSFT", change: "+5.2%" },
  { name: "TSLA", change: "-2.1%" },
];

export default function MarketCards() {
  return (
    <div className="grid grid-cols-2 gap-5 mt-12">

      {stocks.map((stock, index) => (

        <motion.div

          whileHover={{ scale: 1.05 }}

          key={index}

          className="rounded-2xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-xl p-5"

        >

          <h3 className="text-zinc-300 text-lg">
            {stock.name}
          </h3>

          <p
            className={`text-3xl font-bold ${
              stock.change.startsWith("+")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {stock.change}
          </p>

        </motion.div>

      ))}

    </div>
  );
}