import { ReactNode } from "react";

export interface IAuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

export interface IAuthProviderProps {
    children: ReactNode;
}