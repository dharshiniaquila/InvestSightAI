import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function TradingChart() {
  const chartContainer = useRef();

  useEffect(() => {
    const chart = createChart(chartContainer.current, {
      width: chartContainer.current.clientWidth,
      height: 420,
      layout: {
        background: { color: "#18181b" },
        textColor: "#d4d4d8",
      },
      grid: {
        vertLines: { color: "#27272a" },
        horzLines: { color: "#27272a" },
      },
    });

    const series = chart.addAreaSeries({
      lineColor: "#8B5CF6",
      topColor: "rgba(139,92,246,0.5)",
      bottomColor: "rgba(139,92,246,0.05)",
    });

    series.setData([
      { time: "2024-01-01", value: 100 },
      { time: "2024-02-01", value: 120 },
      { time: "2024-03-01", value: 110 },
      { time: "2024-04-01", value: 145 },
      { time: "2024-05-01", value: 160 },
      { time: "2024-06-01", value: 175 },
      { time: "2024-07-01", value: 195 },
    ]);

    chart.timeScale().fitContent();

    const resize = () => {
      chart.applyOptions({
        width: chartContainer.current.clientWidth,
      });
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      chart.remove();
    };
  }, []);

  return (
    <div className="mt-10 rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6">
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Market Trend</h2>
          <p className="text-zinc-400">
            Historical Investment Performance
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-3 py-1 rounded-lg bg-purple-600">
            1M
          </button>

          <button className="px-3 py-1 rounded-lg bg-zinc-800">
            6M
          </button>

          <button className="px-3 py-1 rounded-lg bg-zinc-800">
            1Y
          </button>

          <button className="px-3 py-1 rounded-lg bg-zinc-800">
            ALL
          </button>
        </div>
      </div>

      <div ref={chartContainer}></div>
    </div>
  );
}