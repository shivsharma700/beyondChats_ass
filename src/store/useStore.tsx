import create from 'zustand';

interface StoreState {
  isDark: boolean;
  updateIsDark: (value: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  isDark: JSON.parse(localStorage.getItem('isdark') || 'false'),
  updateIsDark: (value) => {
    localStorage.setItem('isdark', JSON.stringify(value));
    set({ isDark: value });
  },
}));
