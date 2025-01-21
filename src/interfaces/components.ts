import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

export interface ICardProps {
    name: string;
    type: string;
    cardFunction: string;
}

export interface IGenericModalProps {
    open: boolean;
    handleClose: () => void;
    title: string;
    children: ReactNode;
    illustration: string;
    buttonText: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isFormValid: boolean;
    buttonColor?: string;
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

export interface ITransactionItemWithActionsProps
    extends ITransactionItemProps {
    onDelete: () => void;
    onSave: (
        index: number,
        type: string,
        amount: string,
        isNegative: boolean
    ) => void;
    index: number;
    hideActions?: boolean;
}

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
    hideSubmitButton?: boolean;
}

export interface IEditTransactionModalProps {
    open: boolean;
    onClose: () => void;
    onSave: (type: string, amount: string, isNegative: boolean) => void;
    initialType: string;
    initialAmount: string;
}

export interface ITransactionDetailsModalProps {
    open: boolean;
    onClose: () => void;
    transaction: {
        type: string;
        amount: string;
        date: string;
        author: string;
    };
}

export interface IServicesAvailableProps {
    onCardClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface IConfirmationModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export interface ITransactionsProps {
    onTransactionComplete: (transaction: ITransactionItemProps) => void;
}
