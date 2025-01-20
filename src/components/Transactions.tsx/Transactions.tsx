import React, { ChangeEvent, useState } from 'react';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import styles from './Transactions.module.scss';
import { formatCurrency } from '@/src/utils/formatCurrency';
import { IUserData } from '@/src/interfaces/auth';
import { ITransactionItemProps } from '@/src/interfaces/components';
import TransactionalForm from '../TransactionForm/TransactionalForm';

interface TransactionsProps {
    onTransactionComplete: (transaction: ITransactionItemProps) => void;
}

const Transactions: React.FC<TransactionsProps> = ({ onTransactionComplete }) => {
    const [transactionType, setTransactionType] = useState<string>('deposito');
    const [amount, setAmount] = useState<string>('');
    const [isValidAmount, setIsValidAmount] = useState<boolean>(true);

    const handleTypeChange = (event: SelectChangeEvent<string>) => {
        setTransactionType(event.target.value);
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const formattedAmount = formatCurrency(inputValue);
        
        setAmount(formattedAmount);

        const numericValue = parseFloat(formattedAmount.replace(/\./g, '').replace(',', '.'));
        setIsValidAmount(numericValue !== 0);
    };

    const handleSubmit = () => {
        if (!isValidAmount || !amount) {
            console.log('Invalid amount: Value cannot be zero.');
            return;
        }

        const userDataString = sessionStorage.getItem('userData');
        if (!userDataString) {
            console.log('Usuário não encontrado. Por favor, faça o login.');
            return;
        }

        const userData: IUserData = JSON.parse(userDataString);

        const newTransaction: ITransactionItemProps = {
            month: "Janeiro",
            date: new Date().toISOString(),
            type: transactionType === 'deposito' ? 'Depósito' : 'Transferência',
            amount: amount.replace('R$', '').trim(),
            isNegative: transactionType !== 'deposito',
        };

        userData.transactions.unshift(newTransaction);
        sessionStorage.setItem('userData', JSON.stringify(userData));
        onTransactionComplete(newTransaction);

        // Clean form after submit
        setTransactionType('deposito');
        setAmount('');
        setIsValidAmount(true);
    };

    return (
        <Box className={styles.transactionsContainer}>
            <Typography variant="h4" className={styles.title}>Nova transação</Typography>
            <TransactionalForm
                transactionType={transactionType}
                amount={amount}
                isValidAmount={isValidAmount}
                handleTypeChange={handleTypeChange}
                handleAmountChange={handleAmountChange}
                handleSubmit={handleSubmit}
            />
        </Box>
    );
};

export default Transactions;
