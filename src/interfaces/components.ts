import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

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

export interface IHeaderLoggedProps {
    userName: string;
}

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

export interface ITransactionItemWithActionsProps extends ITransactionItemProps { onDelete: () => void; }

export interface IMenuListProps {
    selectedMenuItem: string;
    handleMenuItemClick: (menuItem: string) => void;
}

export interface ITransactionalFormProps {
    transactionType: string;
    amount: string;
    isValidAmount: boolean;
    handleTypeChange: (event: SelectChangeEvent<string>) => void;
    handleAmountChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
}

export interface IEditTransactionModalProps {
    open: boolean;
    onClose: () => void;
    onSave: (type: string, amount: string) => void;
    initialType: string;
    initialAmount: string;
}

