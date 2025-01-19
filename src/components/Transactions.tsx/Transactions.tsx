import React, { ChangeEvent, useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, SelectChangeEvent } from '@mui/material';
import styles from './Transactions.module.scss'; // Importação do arquivo de estilos
import { formatCurrency } from '@/src/utils/formatCurrency';

const Transactions: React.FC = () => {
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

        // Validates if the value is zero
        const numericValue = parseFloat(formattedAmount.replace(/\./g, '').replace(',', '.'));
        setIsValidAmount(numericValue !== 0);
    };

    const handleSubmit = () => {
        if (!isValidAmount) {
            console.log('Invalid amount: Value cannot be zero.');
            return;
        }
        // Lógica para concluir a transação
        console.log(`Type: ${transactionType}, Amount: ${amount}`);
    };

    return (
        <Box className={styles.transactionsContainer}>
            <Typography variant="h4" className={styles.title}>New Transaction</Typography>
            <Box className={styles.inputWrapper}>
                <InputLabel className={styles.customLabel}>Select Transaction Type</InputLabel>
                <FormControl variant="outlined" margin="normal" className={styles.dropdown}>
                    <Select
                        value={transactionType}
                        onChange={handleTypeChange}
                        className={styles.customInput}
                    >
                        <MenuItem value="deposito">Deposit</MenuItem>
                        <MenuItem value="transferencia">Transfer</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box className={styles.inputWrapper}>
                <InputLabel className={styles.customLabel}>Amount</InputLabel>
                <FormControl margin="normal" className={styles.input}>
                    <TextField
                        value={amount}
                        onChange={handleAmountChange}
                        variant="outlined"
                        placeholder="00,00"
                        className={`${styles.customInput} ${!isValidAmount ? styles.invalidInput : ''}`}
                        error={!isValidAmount}
                    />
                    {!isValidAmount && <Typography variant="body2" className={styles.errorMessage}>Value cannot be zero</Typography>}
                </FormControl>
            </Box>
            <Button variant="contained" className={styles.submitButton} onClick={handleSubmit}>
                Complete Transaction
            </Button>
        </Box>
    );
};

export default Transactions;
