
// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Welcome to NPP Decision Simulation</h1>
      <p className="mt-2">Experience decision-making under uncertainty in a nuclear power plant.</p>
      <Link to="/simulation" className="mt-4 block text-blue-500">Start Simulation</Link>
    </div>
  );
}
