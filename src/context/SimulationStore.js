// src/context/SimulationStore.js
import { create } from "zustand";

export const useSimulationStore = create((set) => ({
  step: 0,
  teamBeliefs: [
    { id: 1, name: "Operator 1", belief: "The valve is closed." },
    { id: 2, name: "Operator 2", belief: "We have enough coolant." },
    { id: 3, name: "Supervisor", belief: "Trust the indicators." },
  ],
  advanceStep: () => set((state) => ({ step: state.step + 1 })),
  updateBeliefs: (impact) =>
    set((state) => ({
      teamBeliefs: state.teamBeliefs.map((member) => ({
        ...member,
        belief:
          impact === "reinforce"
            ? `${member.belief} (More confident)`
            : `${member.belief} (Doubt increasing)`,
      })),
    })),
}));
