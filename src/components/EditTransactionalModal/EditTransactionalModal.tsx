import React, { useState, useEffect, ChangeEvent } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, FormControl, InputLabel, Select, MenuItem, TextField, Typography, SelectChangeEvent } from '@mui/material';
import styles from './EditTransactionalModal.module.scss';
import { IEditTransactionModalProps } from '@/src/interfaces/components';

const EditTransactionModal: React.FC<IEditTransactionModalProps> = ({ open, onClose, onSave, initialType, initialAmount }) => {
    const [transactionType, setTransactionType] = useState('');
    const [amountValue, setAmountValue] = useState(initialAmount);
    const [isValidAmount, setIsValidAmount] = useState(true);

    useEffect(() => {
        const formattedType = initialType.toLowerCase() === 'depósito' || initialType.toLowerCase() === 'deposito' ? 'deposito' : 'transferencia';
        setTransactionType(formattedType);
        setAmountValue(initialAmount);
    }, [initialType, initialAmount, open]);

    const handleTypeChange = (event: SelectChangeEvent<string>) => {
        setTransactionType(event.target.value);
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmountValue(event.target.value);
        setIsValidAmount(event.target.value !== '0');
    };

    const handleSubmit = () => {
        if (amountValue === '0') {
            setIsValidAmount(false);
            return;
        }
        const isNegative = transactionType === 'transferencia';
        onSave(transactionType, amountValue, isNegative);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Editar Transação</DialogTitle>
            <DialogContent>
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
                            value={amountValue}
                            onChange={handleAmountChange}
                            variant="outlined"
                            placeholder="00,00"
                            className={`${styles.customInput} ${!isValidAmount ? styles.invalidInput : ''}`}
                            error={!isValidAmount}
                        />
                        {!isValidAmount && <Typography variant="body2" className={styles.errorMessage}>O valor não pode ser zero</Typography>}
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancelar</Button>
                <Button onClick={handleSubmit} color="secondary">Salvar alterações</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditTransactionModal;
