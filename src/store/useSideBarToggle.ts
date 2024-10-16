import { create } from 'zustand'


interface ISideBarState {
  sideBarToggleState: boolean
}
interface ISideBarAction {
  setSideBarToggleState: () => void
}

export const useSideBarToggle = create<ISideBarState & ISideBarAction>((set) => ({
  sideBarToggleState: true,
  setSideBarToggleState: () => set((state) => ({ sideBarToggleState: !state.sideBarToggleState  })),
}))