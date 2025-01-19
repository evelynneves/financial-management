import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { IAuthContextType, IAuthProviderProps, IUserData } from "../interfaces/auth";

const AuthContext = createContext<IAuthContextType>({
    isLoggedIn: false,
    user: null,
    login: (userData: IUserData) => {},
    logout: () => {},
});

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<IUserData | null>(null);

    const login = (userData: IUserData) => {
        setIsLoggedIn(true);
        setUser(userData);

        sessionStorage.setItem('transactions', JSON.stringify(userData.transactions));
        sessionStorage.setItem('userData', JSON.stringify(userData));
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    useEffect(() => {
        // teste
    }, []);

    const value = useMemo(() => ({ isLoggedIn, user, login, logout }), [isLoggedIn, user]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
