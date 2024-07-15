import create from 'zustand';

interface StoreState {
  count: number,
  Name: string,
  isDark: boolean;
  tab: string;
  updateIsDark: (value: boolean) => void;
  setTab: (tab: string) => void;
  setCount: (value: number) => void;
  setName: (value: string) => void;
}

interface ChatState {
  chatList: any[];
  chatMessages: any;
  isLoading: boolean;
  error: any;
  fetchChats: () => void;
  fetchChatMessages: (chatId: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  count: 1,
  Name: "Name",
  isDark: JSON.parse(localStorage.getItem('isdark') || 'false'),
  tab: 'All',
  updateIsDark: (value) => {
    localStorage.setItem('isdark', JSON.stringify(value));
    set({ isDark: value });
  },
  setTab: (tab) => set({ tab }),
  setCount: (value) => set({count: value}),
  setName: (value) => set({Name: value ? value : 'Name'})
}));

export const useChatStore = create<ChatState>((set) => ({
    chatList: [],
    chatMessages: [],
  isLoading: false,
  error: null,
  fetchChats: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1');
      const data = await response.json();
      console.log(data?.data?.data)
      set({ chatList: data?.data?.data, isLoading: false });
    } catch (error) {
      set({ error: error, isLoading: false });
      console.log(error)
    }
  },
  fetchChatMessages: async (chatId: any) => {
    set({error: null });
    try {
      const response = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
      const data = await response.json();
      console.log(data)
      set({ chatMessages: data?.data.reverse() });
    } catch (error) {
      set({ error: error, });
    }
  },
}));

