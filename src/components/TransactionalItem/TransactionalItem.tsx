import { Box, Typography } from "@mui/material";
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
        </Box>
    );
};

export default TransactionItem;
