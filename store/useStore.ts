import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface StoreState {
  prompt: string;
  inputText: string;
  aiResponse: string | null;
  theme: Theme;
  setPrompt: (prompt: string) => void;
  setInputText: (text: string) => void;
  setAIResponse: (response: string) => void;
  toggleTheme: (theme: Theme) => void;
}

export const useStore = create<StoreState>((set) => ({
  prompt: '',
  inputText: '',
  aiResponse: null,
  theme: 'light',
  setPrompt: (prompt) => set({ prompt }),
  setInputText: (text) => set({ inputText: text }),
  setAIResponse: (response) => set({ aiResponse: response }),
  toggleTheme: (theme) => set({ theme }),
}));
