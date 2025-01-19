import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useMemo,
} from "react";
import {
    IAuthContextType,
    IAuthProviderProps,
    IUserData,
} from "../interfaces/auth";

const AuthContext = createContext<IAuthContextType>({
    isLoggedIn: false,
    user: null,
    login: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<IUserData | null>(null);

    const login = (userData: IUserData) => {
        sessionStorage.setItem("userData", JSON.stringify(userData));
        setIsLoggedIn(true);
        setUser(userData);
    };

    const logout = () => {
        sessionStorage.removeItem("userData");
        setIsLoggedIn(false);
        setUser(null);
    };

    useEffect(() => {
        const storedUserData = sessionStorage.getItem("userData");
        if (storedUserData) {
            const userData: IUserData = JSON.parse(storedUserData);
            setIsLoggedIn(true);
            setUser(userData);
        }
    }, []);

    const value = useMemo(
        () => ({ isLoggedIn, user, login, logout }),
        [isLoggedIn, user]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
