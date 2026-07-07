import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 mt-20">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8">

        <h2 className="text-white text-xl font-bold">
          InvestSight AI
        </h2>

        <p className="text-zinc-400 mt-4 md:mt-0">
          Built for AI Hackathon 🚀
        </p>

        <div className="flex gap-5 mt-4 md:mt-0 text-2xl text-zinc-400">

          <FaGithub className="hover:text-white cursor-pointer" />

          <FaLinkedin className="hover:text-white cursor-pointer" />

        </div>

      </div>

    </footer>
  );
}