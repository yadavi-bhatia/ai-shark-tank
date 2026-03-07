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
        className="relative group px-10 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 disabled:cursor-not-allowed"
        style={{
          background: loading
            ? "linear-gradient(135deg, #374151, #1f2937)"
            : "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
          backgroundSize: "200% 200%",
          color: "white",
          boxShadow: loading
            ? "none"
            : "0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(99, 102, 241, 0.3)",
          animation: loading ? "none" : "gradientShift 3s ease infinite",
        }}
      >
        {/* Glow ring */}
        {!loading && (
          <span
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.8)",
              border: "1px solid rgba(139, 92, 246, 0.5)",
            }}
          />
        )}

        {loading ? (
          <span className="flex items-center gap-3">
            {/* Spinner */}
            <span
              className="inline-block w-5 h-5 border-2 border-gray-500 border-t-purple-400 rounded-full"
              style={{ animation: "spin 0.8s linear infinite" }}
            />
            <span className="text-gray-300">AI is cooking up your idea...</span>
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <span>Generate Startup Idea</span>
            <span className="text-xl">🚀</span>
          </span>
        )}
      </button>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}