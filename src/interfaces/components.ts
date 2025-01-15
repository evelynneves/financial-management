import { ReactNode } from "react";

export interface IGenericModalProps {
    open: boolean;
    handleClose: () => void;
    title: string;
    children: ReactNode;
    illustration: string;
    buttonText: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isFormValid: boolean;
}

export type IHomeModalProps = Pick<IGenericModalProps, "open" | "handleClose">;

export interface ISidebarProps {
    children: ReactNode;
    title?: string;
}

export interface ITransactionItemProps {
    month: string;
    date: string;
    type: string;
    amount: string;
    isNegative: boolean;
}

export interface IMenuListProps {
    selectedMenuItem: string;
    handleMenuItemClick: (menuItem: string) => void;
}
