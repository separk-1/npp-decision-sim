
// src/pages/Results.jsx
import { Link } from "react-router-dom";

export default function Results() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Simulation Results</h1>
      <p className="mt-2">Analyze the impact of your decisions.</p>
      <Link to="/simulation" className="mt-4 block text-blue-500">Try Again</Link>
    </div>
  );
}
