import create from 'zustand';

interface StoreState {
  isDark: boolean;
  tab: string;
  updateIsDark: (value: boolean) => void;
  setTab: (tab: string) => void;
}
export const useStore = create<StoreState>((set) => ({
  isDark: JSON.parse(localStorage.getItem('isdark') || 'false'),
  tab: 'All',
  updateIsDark: (value) => {
    localStorage.setItem('isdark', JSON.stringify(value));
    set({ isDark: value });
  },
  setTab: (tab) => set({ tab }),
}));

