import { createStore } from "zustand";

export const counterStore = createStore((set) => ({
    count: 0,
    increment: () => setImmediate((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count:state.count - 1}))
}))
