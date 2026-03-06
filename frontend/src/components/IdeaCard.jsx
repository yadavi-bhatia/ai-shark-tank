export default function IdeaCard({ idea }) {
  const sharks = [
    { emoji: "🦈", name: "Mark C.", title: "Tech Mogul" },
    { emoji: "🦈", name: "Sarah K.", title: "VC Queen" },
    { emoji: "🦈", name: "Raj P.", title: "Angel Investor" },
  ];

  const ratingColor =
    idea.rating >= 8
      ? "#22c55e"
      : idea.rating >= 5
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div
      className="max-w-3xl mx-auto mt-10 rounded-2xl p-px animate-fade"
      style={{
        background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
        boxShadow: "0 0 60px rgba(139, 92, 246, 0.4)",
      }}
    >
      <div
        className="rounded-2xl p-8"
        style={{ background: "#0f0f1a" }}
      >
        {/* Header */}
        <h2
          className="text-3xl font-black text-center mb-2 tracking-tight"
          style={{
            background: "linear-gradient(135deg, #a78bfa, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🚀 {idea.startupName}
        </h2>

        {/* Rating badge */}
        <div className="flex justify-center mb-8">
          <span
            className="px-4 py-1 rounded-full text-sm font-bold"
            style={{
              background: `${ratingColor}22`,
              border: `1px solid ${ratingColor}`,
              color: ratingColor,
            }}
          >
            ⭐ {idea.rating}/10 — {idea.rating >= 8 ? "Hot Deal 🔥" : idea.rating >= 5 ? "Promising 💡" : "Needs Work 🛠️"}
          </span>
        </div>

        {/* Problem & Solution */}
        <div className="space-y-4 mb-8">
          <div
            className="p-4 rounded-xl"
            style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            <p className="text-xs uppercase tracking-widest text-purple-400 mb-1 font-semibold">Problem</p>
            <p className="text-gray-200 text-base leading-relaxed">{idea.problem}</p>
          </div>

          <div
            className="p-4 rounded-xl"
            style={{ background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.2)" }}
          >
            <p className="text-xs uppercase tracking-widest text-pink-400 mb-1 font-semibold">Solution</p>
            <p className="text-gray-200 text-base leading-relaxed">{idea.solution}</p>
          </div>
        </div>

        {/* Shark Investors */}
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-4">The Sharks</p>
        <div className="grid grid-cols-3 gap-4">
          {sharks.map((shark, i) => (
            <div
              key={i}
              className="p-4 rounded-xl text-center transition-all duration-300 cursor-pointer group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(139,92,246,0.15)";
                e.currentTarget.style.border = "1px solid rgba(139,92,246,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(139,92,246,0.2)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="text-3xl mb-2">{shark.emoji}</div>
              <p className="font-bold text-white text-sm">{shark.name}</p>
              <p className="text-gray-500 text-xs mt-1">{shark.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}