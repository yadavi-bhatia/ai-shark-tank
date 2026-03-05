import { useState } from "react";
import { generateIdea } from "../utils/api";

export default function Landing({ setIdea }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const data = await generateIdea();

    setIdea(data);
    setLoading(false);
  };

  return (
    <div className="text-center mt-10">

      <button
        onClick={handleClick}
        disabled={loading}
        className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        {loading ? "AI is thinking 🤖..." : "Generate Startup Idea 🚀"}
      </button>

    </div>
  );
}