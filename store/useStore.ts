import { Dimensions, ScaledSize } from 'react-native';
import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface GenerationResponse {
  generation: string;
  generation_token_count: number;
  prompt_token_count: number;
  stop_reason: string;
}

interface AIResponse {
  timestamp: string;
  response: GenerationResponse;
}

export interface IDimensions {
  window: ScaledSize;
  screen: ScaledSize;
}

interface StoreState {
  prompt: string;
  inputText: string;
  aiResponse: AIResponse[];
  theme: Theme;
  dimensions: IDimensions;
  error: any;
  setPrompt: (prompt: string) => void;
  setInputText: (text: string) => void;
  setAIResponse: (timestamp: string, response: GenerationResponse) => void;
  toggleTheme: (theme: Theme) => void;
  setDimensions: (dimensions: IDimensions) => void;
  setError: (error: any) => void;
}

export const useStore = create<StoreState>((set) => ({
  prompt: '',
  inputText: '',
  aiResponse: [],
  theme: 'light',
  dimensions: { screen: Dimensions.get('screen'), window: Dimensions.get('window') },
  error: null,
  setPrompt: (prompt) => set({ prompt }),
  setInputText: (text) => set({ inputText: text }),
  setAIResponse: (timestamp, response) => set((state) => ({
    aiResponse: [...state.aiResponse, { timestamp, response }],
  })),
  toggleTheme: (theme) => set({ theme }),
  setDimensions: (dimensions) => set({ dimensions }),
  setError: (error) => set({ error }),
}));
