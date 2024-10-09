import { create } from 'zustand';

interface StoreState {
  prompt: string;
  inputText: string;
  aiResponse: string | null;
  setPrompt: (prompt: string) => void;
  setInputText: (text: string) => void;
  setAIResponse: (response: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  prompt: '',
  inputText: '',
  aiResponse: null,
  setPrompt: (prompt) => set({ prompt }),
  setInputText: (text) => set({ inputText: text }),
  setAIResponse: (response) => set({ aiResponse: response }),
}));
