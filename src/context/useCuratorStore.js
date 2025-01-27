import { create } from "zustand"
import { persist } from "zustand/middleware"

const useCuratorStore = create(
  persist(
    (set) => ({
      curatorMode: false,
      toggleCuratorMode: () =>
        set((state) => ({ curatorMode: !state.curatorMode }))
    }),
    {
      name: "visionary-curator-mode"
    }
  )
)

export default useCuratorStore
