import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSidebarStore = create(
  persist(
    (set, get) => ({
      isOpen: false,       // mobile overlay
      isCollapsed: false,  // desktop collapsed state

      toggleOpen: () => set((s) => ({ isOpen: !s.isOpen })),
      setOpen: (val) => set({ isOpen: val }),
      close: () => set({ isOpen: false }),

      toggleCollapsed: () => set((s) => ({ isCollapsed: !s.isCollapsed })),
      setCollapsed: (val) => set({ isCollapsed: val }),
    }),
    {
      name: "yuma-sidebar",
      partialize: (state) => ({ isCollapsed: state.isCollapsed }),
    }
  )
);

export default useSidebarStore;
