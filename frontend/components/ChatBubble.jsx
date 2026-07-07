import { FaRobot, FaUser } from "react-icons/fa";

export default function ChatBubble({ sender, message }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-5`}
    >
      <div
        className={`flex items-start gap-3 max-w-xl ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`p-3 rounded-full ${
            isUser
              ? "bg-purple-600"
              : "bg-cyan-600"
          }`}
        >
          {isUser ? <FaUser /> : <FaRobot />}
        </div>

        <div
          className={`rounded-2xl p-4 ${
            isUser
              ? "bg-purple-600"
              : "bg-zinc-800"
          }`}
        >
          <p className="text-white">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}