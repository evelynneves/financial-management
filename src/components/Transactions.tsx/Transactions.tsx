import React, { ChangeEvent, useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, SelectChangeEvent } from '@mui/material';
import styles from './Transactions.module.scss'; // Importação do arquivo de estilos
import { formatCurrency } from '@/src/utils/formatCurrency';
import { IUserData } from '@/src/interfaces/auth';
import { ITransactionItemProps } from '@/src/interfaces/components';

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
        if (!isValidAmount) {
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
            date: new Date().toLocaleDateString('pt-BR'),
            type: transactionType === 'deposito' ? 'Depósito' : 'Transferência',
            amount: amount.replace('R$', '').trim(),
            isNegative: transactionType !== 'deposito',
        };

        userData.transactions.unshift(newTransaction);
        sessionStorage.setItem('userData', JSON.stringify(userData));
        onTransactionComplete(newTransaction);

        //Clean form after submit
        setTransactionType('deposito');
        setAmount('00,00');
        setIsValidAmount(true);
    };

    return (
        <Box className={styles.transactionsContainer}>
            <Typography variant="h4" className={styles.title}>Nova transação</Typography>
            <Box className={styles.inputWrapper}>
                <InputLabel className={styles.customLabel}>Selecione o tipo de transação</InputLabel>
                <FormControl variant="outlined" margin="normal" className={styles.dropdown}>
                    <Select
                        value={transactionType}
                        onChange={handleTypeChange}
                        className={styles.customInput}
                    >
                        <MenuItem value="deposito">Depósito</MenuItem>
                        <MenuItem value="transferencia">Transferência</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box className={styles.inputWrapper}>
                <InputLabel className={styles.customLabel}>Valor</InputLabel>
                <FormControl margin="normal" className={styles.input}>
                    <TextField
                        value={amount}
                        onChange={handleAmountChange}
                        variant="outlined"
                        placeholder="00,00"
                        className={`${styles.customInput} ${!isValidAmount ? styles.invalidInput : ''}`}
                        error={!isValidAmount}
                    />
                    {!isValidAmount && <Typography variant="body2" className={styles.errorMessage}>O valor não pode ser zero</Typography>}
                </FormControl>
            </Box>
            <Button variant="contained" className={styles.submitButton} onClick={handleSubmit}>
                Concluir transação
            </Button>
        </Box>
    );
};

export default Transactions;
