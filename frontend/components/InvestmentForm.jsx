import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../api/api";

export default function InvestmentForm() {

  const navigate = useNavigate();

  const [stock, setStock] = useState("");
  const [investment, setInvestment] = useState("");
  const [buyDate, setBuyDate] = useState("");
  const [sellDate, setSellDate] = useState("");
  const [reason, setReason] = useState("");

  const simulateInvestment = async () => {

    try {
      console.log({
  stock,
  investment: Number(investment),
  buy_date: buyDate,
  sell_date: sellDate,
  reason,
});

      const response = await api.post("/simulate", {

        stock,

        investment: Number(investment),

        buy_date: buyDate,

        sell_date: sellDate,

        reason

      });

      console.log(response.data);

      localStorage.setItem(
        "simulation",
        JSON.stringify(response.data)
      );

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      alert("Backend not connected.");

    }

  };

  return (

<motion.div
initial={{ opacity:0,x:80 }}
animate={{ opacity:1,x:0 }}
className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8"
>

<h2 className="text-2xl font-bold text-white mb-6">

Investment Simulation

</h2>

<div className="space-y-5">

<input
value={stock}
onChange={(e)=>setStock(e.target.value)}
placeholder="Stock Name"
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>

<input
type="number"
value={investment}
onChange={(e)=>setInvestment(e.target.value)}
placeholder="Investment Amount"
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>

<input
type="date"
value={buyDate}
onChange={(e)=>setBuyDate(e.target.value)}
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>

<input
type="date"
value={sellDate}
onChange={(e)=>setSellDate(e.target.value)}
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>

<textarea
rows={4}
value={reason}
onChange={(e)=>setReason(e.target.value)}
placeholder="Reason..."
className="w-full p-4 rounded-xl bg-zinc-800 text-white"
/>

<button

onClick={simulateInvestment}

className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500"

>

✨ Simulate Investment

</button>

</div>

</motion.div>

  );

}