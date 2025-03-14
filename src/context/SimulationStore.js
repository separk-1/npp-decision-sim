import { create } from "zustand";

export const useSimulationStore = create((set) => ({
  step: 0,
  riskLevel: 20,  // ✅ 사고 위험도 기본값 추가
  teamBeliefs: [
    { id: 1, name: "Operator 1", belief: 50 },
    { id: 2, name: "Operator 2", belief: 50 },
    { id: 3, name: "Supervisor", belief: 50 },
  ],
  beliefHistory: [{ step: 0, "Operator 1": 50, "Operator 2": 50, "Supervisor": 50 }],
  advanceStep: () =>
    set((state) => ({
      step: state.step + 1,
    })),
  updateBeliefs: (impact) =>
    set((state) => {
      const updatedBeliefs = state.teamBeliefs.map((member) => ({
        ...member,
        belief: impact === "reinforce" ? member.belief + 10 : member.belief - 10,
      }));

      // ✅ 사고 위험도 조정
      const riskChange = impact === "reinforce" ? 15 : -10;
      let newRiskLevel = Math.min(Math.max(state.riskLevel + riskChange, 0), 100);  // 0~100 사이 유지

      return {
        teamBeliefs: updatedBeliefs,
        beliefHistory: [
          ...state.beliefHistory,
          {
            step: state.step + 1,
            "Operator 1": updatedBeliefs[0].belief,
            "Operator 2": updatedBeliefs[1].belief,
            "Supervisor": updatedBeliefs[2].belief,
          },
        ],
        riskLevel: newRiskLevel,
      };
    }),
}));