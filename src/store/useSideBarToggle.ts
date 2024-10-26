import { create } from 'zustand'


interface ISideBarState {
  sideBarToggleState: boolean | null
}
interface ISideBarAction {
  setSideBarToggleState: (newState: boolean) => void
}

export const useSideBarToggle = create<ISideBarState & ISideBarAction>((set) => ({
  sideBarToggleState: null, // Initial state is null
  setSideBarToggleState: (newState) => set({ sideBarToggleState: newState }),
}))
