import { Search, Bell, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 flex items-center gap-3">

          <Search className="text-zinc-500" size={18} />

          <input
            placeholder="Search stocks..."
            className="bg-transparent outline-none text-white"
          />

        </div>

        <Bell className="text-zinc-400 cursor-pointer" />

        <UserCircle
          className="text-cyan-400"
          size={34}
        />

      </div>

    </div>
  );
}