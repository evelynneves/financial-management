import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styles from './TransactionalItem.module.scss';
import { ITransactionItemWithActionsProps } from "@/src/interfaces/components";
import ConfirmationModal from "../ConfirmationModal/ConfirmatinModa";

const TransactionItem: React.FC<ITransactionItemWithActionsProps> = ({ month, date, type, amount, isNegative, onDelete }) => {
    const [open, setOpen] = useState(false);

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

    return (
        <Box className={styles.transactionBox}>
            <Box className={styles.transactionHeader}>
                <Typography variant="subtitle2" className={styles.month}>
                    {month}
                </Typography>
                <Typography variant="body2" className={styles.date}>
                    {date}
                </Typography>
            </Box>
            <Typography variant="body1" className={isNegative ? styles.withdrawal : styles.deposit}>
                {type}
            </Typography>
            <Typography variant="h6" className={isNegative ? styles.amountNegative : styles.amount}>
                {isNegative ? `-R$ ${amount}` : `R$ ${amount}`}
            </Typography>
            <div className={styles.underline}></div>
            <Box className={styles.actionIcons}>
                <IconButton size="small" onClick={handleOpen}>
                    <VisibilityIcon className={styles.icon}/>
                </IconButton>
                <IconButton size="small">
                    <EditIcon className={styles.icon}/>
                </IconButton>
                <IconButton size="small" onClick={handleOpen}>
                    <DeleteIcon className={styles.icon}/>
                </IconButton>
            </Box>
            <ConfirmationModal open={open} onClose={handleClose} onConfirm={handleConfirm} />
        </Box>
    );
};

export default TransactionItem;
