export default function IdeaCard({ idea }) {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-xl animate-fade">

      <h2 className="text-3xl font-bold text-center mb-6">
        🚀 {idea.startupName}
      </h2>

      <div className="space-y-4 text-lg">
        <p><strong>Problem:</strong> {idea.problem}</p>
        <p><strong>Solution:</strong> {idea.solution}</p>
        <p>⭐ <strong>Rating:</strong> {idea.rating}/10</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8 text-center">
        <div className="p-4 bg-gray-100 rounded-lg hover:scale-105 transition">
          🦈
          <p className="font-semibold">Investor 1</p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg hover:scale-105 transition">
          🦈
          <p className="font-semibold">Investor 2</p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg hover:scale-105 transition">
          🦈
          <p className="font-semibold">Investor 3</p>
        </div>
      </div>

    </div>
  );
}