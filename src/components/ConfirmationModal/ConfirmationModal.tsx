import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import styles from "./ConfirmationModal.module.scss";
import { IConfirmationModalProps } from "@/src/interfaces/components";

const ConfirmationModal: React.FC<IConfirmationModalProps> = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose} className={styles.dialogContainer}>
            <DialogTitle className={styles.dialogTitle}>Confirmar Remoção</DialogTitle>
            <DialogContent>
                <DialogContentText className={styles.dialogContentText}>Você tem certeza que deseja remover esta transação?</DialogContentText>
            </DialogContent>
            <DialogActions className={styles.containerButton}>
                <Button onClick={onClose} className={styles.cancelButton}>Cancelar</Button>
                <Button onClick={onConfirm} className={styles.confirmButton}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationModal;
