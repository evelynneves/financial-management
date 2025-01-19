import { ReactNode } from "react";

export interface IAuthContextType {
    isLoggedIn: boolean;
    user: IUserData | null;
    login: (userData: IUserData) => void;
    logout: () => void;
}

export interface IUserData {
    personalData: {
        name: string;
        email: string;
    };
    transactions: Array<{
        month: string;
        date: string;
        type: string;
        amount: string;
        isNegative: boolean;
    }>;
    investiments: {
        totalAmount: string;
        fixedIncome: string;
        variableIncome: string;
    };
    cards: {
        physicalCard: Array<{
            userName: string;
        }>;
        virtualCard: Array<{
            userName: string;
        }>;
    };
}

export interface IAuthProviderProps {
    children: ReactNode;
}
