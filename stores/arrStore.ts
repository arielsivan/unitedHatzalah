import { create } from 'zustand';

interface ArrayStore {
  items: string[]; // Replace `string` with your desired type
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  clearItems: () => void;
}

export const useArrayStore = create<ArrayStore>((set) => ({
  items: [], // Initialize the array

  addItem: (item) => 
    set((state) => ({ items: [...state.items, item] })),

  removeItem: (item) => 
    set((state) => ({ items: state.items.filter((i) => i !== item) })),

  clearItems: () => set({ items: [] }),
}));
