import { useSimulationStore } from "../context/SimulationStore";
import { Link } from "react-router-dom";
import BeliefGraph from "../components/BeliefGraph";  // 그래프 컴포넌트 추가

export default function Simulation() {
  const { step, teamBeliefs, advanceStep, updateBeliefs } = useSimulationStore();

  const scenarios = [
    { text: "Valve status uncertain. Trust indicator?", choices: [
        { text: "Trust signal", impact: "reinforce" },
        { text: "Verify another source", impact: "challenge" }
      ]
    },
    { text: "Coolant levels appear stable. Reduce flow?", choices: [
        { text: "Reduce flow", impact: "reinforce" },
        { text: "Investigate anomaly", impact: "challenge" }
      ]
    }
  ];

  const handleChoice = (impact) => {
    updateBeliefs(impact);
    advanceStep();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Simulation</h2>
      {step < scenarios.length ? (
        <div className="mt-4 p-4 border rounded shadow">
          <p>{scenarios[step].text}</p>
          <div className="mt-2">
            {scenarios[step].choices.map((choice, index) => (
              <button key={index} onClick={() => handleChoice(choice.impact)} className="mr-2 p-2 bg-blue-500 text-white rounded">
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <Link to="/results" className="text-blue-500">View Results</Link>
      )}

      {/* 팀 신념 변화 그래프 추가 */}
      <div className="mt-6">
        <BeliefGraph />
      </div>

      <div className="mt-4">
        <h3 className="font-bold">Team Beliefs</h3>
        {teamBeliefs.map((member) => (
          <div key={member.id} className="p-2 border rounded mt-1">
            <strong>{member.name}:</strong> Confidence: {member.belief}%
          </div>
        ))}
      </div>
    </div>
  );
}