/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField, Typography, Button } from '@mui/material';

import styles from './TransactionalForm.module.scss';
import { ITransactionalFormProps } from '@/src/interfaces/components';

const TransactionalForm: React.FC<ITransactionalFormProps> = ({ transactionType, amount, isValidAmount, handleTypeChange, handleAmountChange, handleSubmit, hideSubmitButton = false }) => {
    return (
        <div className={styles.transactionalFormContainer}>
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
            {!hideSubmitButton && (
                <Button variant="contained" className={styles.submitButton} onClick={handleSubmit}>
                    Concluir transação
                </Button>
            )}
        </div>
    );
};

export default TransactionalForm;
