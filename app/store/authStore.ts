import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserLogin } from "../types/login.types";


interface AuthState {
  user: UserLogin | null;
  token: string | null;
  setUser: (user: UserLogin, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      setUser: (user, token) => set({ user, token }),

      logout: () => {
        set({ user: null, token: null });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
