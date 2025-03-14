import { useSimulationStore } from "../context/SimulationStore";
import { Link } from "react-router-dom";
import BeliefGraph from "../components/BeliefGraph";
import RiskMeter from "../components/RiskMeter";  // ✅ Risk Meter 추가

export default function Results() {
  const { teamBeliefs, beliefHistory, step, riskLevel } = useSimulationStore();  // ✅ riskLevel 가져오기

  // 팀원들의 평균 신념 계산 (100%에 가까울수록 확신)
  const avgBelief = teamBeliefs.reduce((sum, member) => sum + member.belief, 0) / teamBeliefs.length;

  // 최종 평가 메시지 설정
  let resultMessage = "Your team made a cautious and balanced decision.";
  if (avgBelief >= 80) {
    resultMessage = "Your team strongly reinforced their belief, which may have led to a critical mistake.";
  } else if (avgBelief <= 30) {
    resultMessage = "Your team remained skeptical and possibly avoided a serious accident.";
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Simulation Results</h1>
      <p className="mt-2 text-gray-700">{resultMessage}</p>

      {/* ✅ 사고 진행도 게이지 (Risk Meter) 추가 */}
      <div className="mt-6">
        <RiskMeter />
      </div>

      {/* ✅ 팀 신념 변화 그래프 (기존 코드 유지) */}
      <div className="mt-6">
        <BeliefGraph />
      </div>

      <div className="mt-4">
        <h3 className="font-bold">Final Team Beliefs</h3>
        {teamBeliefs.map((member) => (
          <div key={member.id} className="p-2 border rounded mt-1">
            <strong>{member.name}:</strong> Confidence: {member.belief}%
          </div>
        ))}
      </div>

      {/* ✅ 최종 사고 위험도 표시 */}
      <p className="mt-4 text-sm text-gray-600">Final Risk Level: {riskLevel}%</p>

      <p className="mt-4 text-sm text-gray-600">Total decisions made: {step}</p>

      <Link to="/simulation" className="mt-6 inline-block bg-blue-500 text-white p-2 rounded">
        Restart Simulation
      </Link>
    </div>
  );
}