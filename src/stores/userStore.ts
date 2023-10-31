import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"


export interface User {
    id?: number
    name: string
    surname?: string
    email?: string
    phone?: string | null
    location?: string | null
    image: string
    type?: string
}

export interface UserActions {
    setUser: (user: User) => void
    logout: () => void
}

export const useUserStore = create<User & UserActions>()(
    devtools(
        persist(
            (set) => ({
                id: undefined,
                name: "",
                surname: "",
                email: "",
                phone: undefined,
                location: undefined,
                image: "",
                type: "",
                setUser: (user) => set(user),
                logout: () => {
                    set({
                        id: undefined,
                        name: "",
                        surname: "",
                        email: "",
                        phone: null,
                        location: null,
                        image: "",
                        type: "",
                    })
                },
            }),
            {
                name: "user-storage",
            }
        )
    )
)