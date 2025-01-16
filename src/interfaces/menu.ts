import { ReactNode } from "react";

export interface IMenuContextProps {
    selectedMenuItem: string;
    setSelectedMenuItem: (menuItem: string) => void;
}

export interface IMenuProviderProps {
    children: ReactNode;
}