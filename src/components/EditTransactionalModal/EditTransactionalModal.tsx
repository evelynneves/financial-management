import React, { useState, useEffect, ChangeEvent } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { IEditTransactionModalProps } from '@/src/interfaces/components';
import { formatCurrency } from '@/src/utils/formatCurrency';
import TransactionalForm from '../TransactionForm/TransactionalForm';

const EditTransactionModal: React.FC<IEditTransactionModalProps> = ({ open, onClose, onSave, initialType, initialAmount }) => {
    const [transactionType, setTransactionType] = useState<string>('');
    const [amountValue, setAmountValue] = useState<string>(initialAmount);
    const [isValidAmount, setIsValidAmount] = useState<boolean>(true);

    useEffect(() => {
        const formattedType = initialType.toLowerCase() === 'depósito' || initialType.toLowerCase() === 'deposito' ? 'deposito' : 'transferencia';
        setTransactionType(formattedType);
        setAmountValue(initialAmount);
    }, [initialType, initialAmount, open]);

    const handleTypeChange = (event: SelectChangeEvent<string>) => {
        setTransactionType(event.target.value);
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const formattedAmount = formatCurrency(inputValue);

        setAmountValue(formattedAmount);

        const numericValue = parseFloat(formattedAmount.replace(/\./g, '').replace(',', '.'));
        setIsValidAmount(numericValue !== 0);
    };

    const handleSubmit = () => {
        if (!isValidAmount || !amountValue) {
            console.log('Invalid amount: Value cannot be zero.');
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
                <TransactionalForm
                    transactionType={transactionType}
                    amount={amountValue}
                    isValidAmount={isValidAmount}
                    handleTypeChange={handleTypeChange}
                    handleAmountChange={handleAmountChange}
                    handleSubmit={handleSubmit}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancelar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditTransactionModal;
