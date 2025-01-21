/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

import styles from './TransactionalItem.module.scss';
import { ITransactionItemWithActionsProps } from "@/src/interfaces/components";
import { formatDateWithoutWeekday } from '@/src/utils/formatDate';
import { getLoggedInUser } from "@/src/utils/getLoggedUser";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import EditTransactionModal from "../EditTransactionalModal/EditTransactionalModal";
import TransactionDetailsModal from "../TransactionalDetailsModal/TransactionalDetailsModal";

const TransactionItem: React.FC<ITransactionItemWithActionsProps> = ({ month, date, type, amount, isNegative, onDelete, index, onSave, hideActions }) => {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [transactionType, setTransactionType] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        onDelete();
        handleClose();
    };

    const handleEditOpen = () => {
        const formattedType = type.toLowerCase() === 'depósito' || type.toLowerCase() === 'deposito' ? 'deposito' : 'transferencia';

        setTransactionType(formattedType);
        setTransactionAmount(amount);

        setEditOpen(true);
    };

    const handleEditClose = () => {
        setEditOpen(false);
    };

    const handleSave = (newType: string, newAmount: string, isNegative: boolean) => {
        const formattedType = newType === 'deposito' ? 'Depósito' : 'Transferência';
        const formattedAmount = newAmount.replace('R$', '').trim();
        onSave(index, formattedType, formattedAmount, isNegative);
        handleEditClose();
    };

    const handleDetailsOpen = () => {
        setDetailsOpen(true);
    };

    const handleDetailsClose = () => {
        setDetailsOpen(false);
    };

    const formattedDate = formatDateWithoutWeekday(new Date(date));
    const loggedInUser = getLoggedInUser();
    const author = loggedInUser ? loggedInUser.personalData.name : 'Usuário Desconhecido';

    const transactionDetails = {
        type,
        amount: isNegative ? `-R$ ${amount}` : `R$ ${amount}`,
        date,
        author: author
    };

    return (
        <Box className={styles.transactionBox}>
            <Box className={styles.transactionHeader}>
                <Typography variant="subtitle2" className={styles.month}>
                    {month}
                </Typography>
                <Typography variant="body2" className={styles.date}>
                    {formattedDate}
                </Typography>
            </Box>
            <Typography variant="body1" className={isNegative ? styles.withdrawal : styles.deposit}>
                {type}
            </Typography>
            <Typography variant="h6" className={isNegative ? styles.amountNegative : styles.amount}>
                {isNegative ? `-R$ ${amount}` : `R$ ${amount}`}
            </Typography>
            <div className={styles.underline}></div>
            {!hideActions && (
                <Box className={styles.actionIcons}>
                    <IconButton size="small" onClick={handleDetailsOpen}>
                        <VisibilityIcon className={styles.icon} />
                    </IconButton>
                    <IconButton size="small" onClick={handleEditOpen}>
                        <EditIcon className={styles.icon} />
                    </IconButton>
                    <IconButton size="small" onClick={handleOpen}>
                        <DeleteIcon className={styles.icon} />
                    </IconButton>
                </Box>
            )}
            <ConfirmationModal open={open} onClose={handleClose} onConfirm={handleConfirm} />
            <EditTransactionModal
                open={editOpen}
                onClose={handleEditClose}
                onSave={handleSave}
                initialType={transactionType}
                initialAmount={transactionAmount}
            />
            <TransactionDetailsModal
                open={detailsOpen}
                onClose={handleDetailsClose}
                transaction={transactionDetails}
            />
        </Box>
    );
};

export default TransactionItem;
