import { useSimulationStore } from "../context/SimulationStore";
import { useEffect, useState } from "react";

export default function RiskMeter() {
  const { riskLevel } = useSimulationStore();
  const [color, setColor] = useState("green");

  useEffect(() => {
    if (riskLevel < 40) setColor("green");
    else if (riskLevel < 70) setColor("orange");
    else setColor("red");
  }, [riskLevel]);

  return (
    <div className="p-4 border rounded shadow bg-white text-center">
      <h2 className="text-lg font-bold">Accident Risk Level</h2>
      <div className="relative w-full h-6 bg-gray-300 rounded mt-2">
        <div
          className="h-full rounded"
          style={{ width: `${riskLevel}%`, backgroundColor: color, transition: "width 0.5s" }}
        ></div>
      </div>
      <p className="mt-2 font-semibold text-gray-700">{riskLevel}% Risk</p>
    </div>
  );
}