import MemoryCard from "../components/MemoryCard";

export default function Memory() {
  const memories = [
    {
      stock: "Apple",
      buy: "10 Jan 2024",
      sell: "12 Jun 2024",
      profit: "₹18,450",
      insight: "You sold Apple earlier than your usual strategy.",
    },
    {
      stock: "NVIDIA",
      buy: "15 Feb 2024",
      sell: "20 Jul 2024",
      profit: "₹32,100",
      insight: "Holding another month could have increased returns.",
    },
    {
      stock: "Tesla",
      buy: "1 Mar 2024",
      sell: "18 Aug 2024",
      profit: "₹11,300",
      insight: "Your timing matched the market trend well.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white px-10 py-10">

      <h1 className="text-5xl font-bold mb-12">
        🧠 Investment Memory
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {memories.map((memory, index) => (
          <MemoryCard key={index} {...memory} />
        ))}
      </div>

    </div>
  );
}