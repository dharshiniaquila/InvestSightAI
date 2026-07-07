import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardLayout from "../components/DashboardLayout";
import StatsCard from "../components/StatsCard";
import MarketTicker from "../components/MarketTicker";
import TradingChart from "../components/TradingChart";

export default function Dashboard() {

  const data = JSON.parse(localStorage.getItem("simulation"));

  return (
    <DashboardLayout>

      <Sidebar />

      <div className="ml-24 p-10">

        <Topbar />

        <MarketTicker />

        {/* AI Recommendation */}
        <div className="mt-8 rounded-3xl bg-zinc-900 p-8 border border-zinc-800">
          <h2 className="text-2xl font-bold text-cyan-400">
            🤖 AI Recommendation
          </h2>

          <p className="mt-4 text-zinc-300 leading-8">
            {data?.result || "No AI recommendation available."}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <StatsCard
            title="Portfolio Value"
            value="₹2,48,000"
            change="+18.4%"
            color="text-green-400"
          />

          <StatsCard
            title="Today's Profit"
            value="₹8,420"
            change="+3.2%"
            color="text-green-400"
          />

          <StatsCard
            title="AI Confidence"
            value="94%"
            change="Excellent"
            color="text-cyan-400"
          />

          <StatsCard
            title="Risk Level"
            value="Medium"
            change="Balanced"
            color="text-yellow-400"
          />

        </div>

        {/* Trading Chart */}
        <TradingChart />

      </div>

    </DashboardLayout>
  );
}