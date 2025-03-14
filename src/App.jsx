
// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Simulation from "./pages/Simulation";
import Results from "./pages/Results";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
          <Link to="/" className="font-bold">NPP Decision Sim</Link>
          <div>
            <Link to="/simulation" className="mr-4">Start Simulation</Link>
            <Link to="/results">Results</Link>
          </div>
        </nav>
        <div className="p-6 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
