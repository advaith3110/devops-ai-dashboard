import { useState } from "react";

function InputBox({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    onSend(input);

    setInput("");
  };

  return (
    <div className="border-t border-zinc-800 p-4 flex gap-4 bg-zinc-950">
      <input
        type="text"
        placeholder="Ask DevOps AI about Docker, Kubernetes, AWS..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        className="flex-1 bg-zinc-900 border border-zinc-800 p-4 rounded-xl outline-none focus:border-blue-500 transition-all"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl transition-all duration-300"
      >
        Send
      </button>
    </div>
  );
}

export default InputBox;
