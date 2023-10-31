import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"


export interface GeneralState {
    isOpenSideNav: boolean
}
export interface GeneralActions {
    setOpenIsSideNav: (isOpenSideNav: boolean) => void
}

export const useGeneralStore = create<GeneralState & GeneralActions>()(
    devtools(
        persist(
            (set) => ({
                isOpenSideNav: false,
                setOpenIsSideNav: (isOpenSideNav: boolean) => {set({ isOpenSideNav })}
            }),
            { name: "general-storage" }
        )
    )
)