import { useState } from "react";
import Landing from "./components/Landing";
import IdeaCard from "./components/IdeaCard";

function App() {
  const [idea, setIdea] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-8">
        AI Shark Tank 🚀
      </h1>

      <Landing setIdea={setIdea} />

      {idea && <IdeaCard idea={idea} />}

    </div>
  );
}

export default App;