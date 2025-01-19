import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styles from './TransactionalItem.module.scss';
import { ITransactionItemProps } from "@/src/interfaces/components";

const TransactionItem: React.FC<ITransactionItemProps> = ({ month, date, type, amount, isNegative }) => {
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
                <IconButton size="small">
                    <VisibilityIcon className={styles.icon}/>
                </IconButton>
                <IconButton size="small">
                    <EditIcon className={styles.icon}/>
                </IconButton>
                <IconButton size="small">
                    <DeleteIcon className={styles.icon}/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default TransactionItem;
