import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

interface ConfirmationModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirmar Remoção</DialogTitle>
            <DialogContent>
                <DialogContentText>Você tem certeza que deseja remover esta transação?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancelar</Button>
                <Button onClick={onConfirm} color="secondary">Confirmar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationModal;
