import { createContext, useContext, useEffect, useState } from "react";
import { IAuthContextType, IAuthProviderProps } from "../interfaces/auth";

const AuthContext = createContext<IAuthContextType>({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    useEffect(() => {
        //teste
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout}}>{children}</AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);