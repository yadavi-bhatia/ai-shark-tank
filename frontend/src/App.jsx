import { useState, useEffect, useRef } from "react";
import Landing from "./components/Landing";
import IdeaCard from "./components/IdeaCard";

function App() {
  const [idea, setIdea] = useState(null);
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
  const script = document.createElement("script");
  script.type = "module";
  script.innerHTML = `
    import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

    const canvas = document.getElementById('bg-canvas');

    const app = TubesCursor(canvas, {
      tubes: {
        colors: ["#f967fb", "#6958d5", "#53eabc"],
        lights: {
          intensity: 300,
          colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
        }
      }
    });

    document.addEventListener("mousemove", (e) => {
      app.mouse.move(e.clientX, e.clientY);
    });

    canvas.addEventListener('click', () => {
      function randomColors(count) {
        return new Array(count).fill(0).map(
          () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
        );
      }

      app.tubes.setColors(randomColors(3));
      app.tubes.setLightsColors(randomColors(4));
    });
  `;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  return (
    <div
      ref={appRef}
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#07070f" }}
    >
      {/* Tubes canvas background */}
      <canvas
        id="bg-canvas"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto p-10">
        <div className="text-center mb-2">
          <h1
            className="text-5xl font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            AI Shark Tank
          </h1>
          <p className="text-gray-400 mt-3 text-base tracking-wide">
            Drop your idea into the tank. Let the sharks decide. 🦈
          </p>
          <p className="text-gray-600 text-xs mt-1">Click anywhere to randomize colors</p>
        </div>

        <Landing setIdea={setIdea} />
        {idea && <IdeaCard idea={idea} />}
      </div>
    </div>
  );
}

export default App;