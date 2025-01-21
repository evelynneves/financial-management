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
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

import styles from './TransactionalDetailsModal.module.scss';
import { ITransactionDetailsModalProps } from '@/src/interfaces/components';

const TransactionDetailsModal: React.FC<ITransactionDetailsModalProps> = ({ open, onClose, transaction }) => {
    const { type, amount, date, author } = transaction;

    return (
        <Dialog open={open} onClose={onClose} className={styles.dialogContainer}>
            <DialogTitle className={styles.dialogTitle}>Detalhes da Transação</DialogTitle>
            <DialogContent className={styles.dialogContent}>
                <TextField
                    label="Tipo de Transação"
                    value={type}
                    variant="outlined"
                    className={styles.inputField}
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                />
                <TextField
                    label="Valor"
                    value={amount}
                    variant="outlined"
                    className={styles.inputField}
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                />
                <TextField
                    label="Data"
                    value={new Date(date).toLocaleString('pt-BR')}
                    variant="outlined"
                    className={styles.inputField}
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                />
                <TextField
                    label="Autor"
                    value={author}
                    variant="outlined"
                    className={styles.inputField}
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                />
            </DialogContent>
            <DialogActions className={styles.containerButton}>
                <Button onClick={onClose} className={styles.closeButton}>Fechar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TransactionDetailsModal;
