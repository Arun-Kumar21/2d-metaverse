import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    user: {
        id: string;
        username: string;
        avatarId?: string;
    } | null;
    login: (token: string, user: { id: string; username: string; avatarId?: string }) => void;
    logout: () => void;
};

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            token: null,
            user: null,
            login: (token, user) => set({ isAuthenticated: true, token, user }),
            logout: () => set({ isAuthenticated: false, token: null, user: null }),
        }),
        {
            name: 'auth-storage', 
        }
    )
);

export default useAuthStore;
