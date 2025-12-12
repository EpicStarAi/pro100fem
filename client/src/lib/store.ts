import { create } from 'zustand';

type Mode = 'business' | 'cinematic';
type Lang = 'ua' | 'en';

interface AppState {
  mode: Mode;
  lang: Lang;
  setMode: (mode: Mode) => void;
  setLang: (lang: Lang) => void;
  toggleMode: () => void;
  toggleLang: () => void;
}

export const useStore = create<AppState>((set) => ({
  mode: 'business',
  lang: 'ua',
  setMode: (mode) => set({ mode }),
  setLang: (lang) => set({ lang }),
  toggleMode: () => set((state) => ({ mode: state.mode === 'business' ? 'cinematic' : 'business' })),
  toggleLang: () => set((state) => ({ lang: state.lang === 'ua' ? 'en' : 'ua' })),
}));
