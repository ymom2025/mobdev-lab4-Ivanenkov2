import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


interface fruitsstate{
    fruits: string[]
    addFruits:(fruitss: string) => void
    removeFruits:(fruitss: string)=>void
    removeAllFruits:()=> void
}

export const useStoreFruits = create<fruitsstate>()(persist((set) => ({
    fruits: [],
    addFruits: (fruitss) => set((state) => ({fruits: [...state.fruits, fruitss]})),
    removeFruits: (fruitss) => set((state) => ({fruits: [...state.fruits.filter((el) => el != fruitss)]})),
    removeAllFruits: () => set({fruits: []}),
}),
{
    name: 'fruit-storage', 
    storage: createJSONStorage(() => localStorage), 
},))