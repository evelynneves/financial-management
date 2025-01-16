import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { IAuthContextType, IAuthProviderProps } from "../interfaces/auth";

const AuthContext = createContext<IAuthContextType>({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    useEffect(() => {
        //teste
    }, []);

    const value = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);