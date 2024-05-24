// src/stores/global.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useGlobalStore = create(
  persist(
    (set) => ({
      primaryColor: "#00b96b",
      setColor: (color) => set(() => ({ primaryColor: color })),
    }),
    {
      name: "primaryColor",
      // partialize 过滤属性，存储哪些字段到localStorage
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ["primaryColor"].includes(key),
          ),
        ),
    },
  ),
);

export default useGlobalStore;
