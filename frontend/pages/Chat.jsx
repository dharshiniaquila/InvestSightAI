import { useState } from "react";
import ChatBubble from "../components/ChatBubble";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      message:
        "Hello! 👋 Ask me anything about your previous investment simulations.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", message: input },
      {
        sender: "ai",
        message:
          "This is a demo response. Once the backend is connected, I'll answer using your investment history.",
      },
    ]);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white pt-28 px-8">

      <h1 className="text-5xl font-bold mb-10">
        🤖 AI Investment Assistant
      </h1>

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 h-[500px] overflow-y-auto">

        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

      </div>

      <div className="flex gap-4 mt-6">

        <input
          type="text"
          placeholder="Ask about your investments..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-purple-500"
        />

        <button
          onClick={sendMessage}
          className="px-8 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 font-bold hover:scale-105 transition"
        >
          Send
        </button>

      </div>

    </div>
  );
}