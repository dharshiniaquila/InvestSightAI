import { motion } from "framer-motion";

export default function ResultChart() {
  return (

<div className="rounded-3xl mt-10 bg-zinc-900/60 border border-zinc-800 p-8">

<h2 className="text-2xl font-bold text-white mb-8">

Stock Performance

</h2>

<svg
viewBox="0 0 700 250"
className="w-full h-72"
>

<defs>

<linearGradient id="graph">

<stop offset="0%" stopColor="#8B5CF6"/>

<stop offset="100%" stopColor="#06B6D4"/>

</linearGradient>

</defs>

<motion.path

initial={{pathLength:0}}

animate={{pathLength:1}}

transition={{duration:2}}

d="M20 220
C120 170 180 130 250 150
C340 180 410 70 510 90
C610 110 650 30 690 50"

fill="none"

stroke="url(#graph)"

strokeWidth="6"

/>

</svg>

</div>

  );
}