import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import styles from './TransactionalDetailsModal.module.scss';
import { ITransactionDetailsModalProps } from '@/src/interfaces/components';

const TransactionDetailsModal: React.FC<ITransactionDetailsModalProps> = ({ open, onClose, transaction }) => {
    const { type, amount, date, author } = transaction;

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Detalhes da Transação</DialogTitle>
            <DialogContent>
                <Typography variant="body1" className={styles.detailItem}>
                    <strong>Tipo de Transação:</strong> {type}
                </Typography>
                <Typography variant="body1" className={styles.detailItem}>
                    <strong>Valor:</strong> {amount}
                </Typography>
                <Typography variant="body1" className={styles.detailItem}>
                    <strong>Data:</strong> {new Date(date).toLocaleString('pt-BR')}
                </Typography>
                <Typography variant="body1" className={styles.detailItem}>
                    <strong>Autor:</strong> {author}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Fechar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TransactionDetailsModal;
