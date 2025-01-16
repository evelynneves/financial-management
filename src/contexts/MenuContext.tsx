import React, { createContext, useContext, useState, useMemo } from "react";
import { IMenuContextProps, IMenuProviderProps } from "../interfaces/menu";

const MenuContext = createContext<IMenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<IMenuProviderProps> = ({ children }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState("Início");

    const value = useMemo(() => ({ selectedMenuItem, setSelectedMenuItem }), [selectedMenuItem, setSelectedMenuItem]);

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = (): IMenuContextProps => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};
