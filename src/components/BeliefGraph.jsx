import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useSimulationStore } from "../context/SimulationStore";

export default function BeliefGraph() {
  const { beliefHistory } = useSimulationStore();

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold mb-2">Team Belief Evolution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={beliefHistory}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="step" label={{ value: "Decision Step", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Confidence Level", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Operator 1" stroke="#8884d8" />
          <Line type="monotone" dataKey="Operator 2" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Supervisor" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}