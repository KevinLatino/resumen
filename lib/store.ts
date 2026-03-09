import { create } from "zustand";

interface Store {
  completedModules: string[];
  quizScore: number | null;
  completeModule: (id: string) => void;
  setQuizScore: (score: number) => void;
}

export const useStore = create<Store>((set) => ({
  completedModules: [],
  quizScore: null,
  completeModule: (id) => set((s) => ({ completedModules: [...new Set([...s.completedModules, id])] })),
  setQuizScore: (score) => set({ quizScore: score }),
}));
