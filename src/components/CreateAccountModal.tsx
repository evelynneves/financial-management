import React, { ChangeEvent, useState } from "react";
import { TextField, Checkbox, FormControlLabel } from "@mui/material";
import GenericModal from "./GenericModal";

import { IHomeModalProps } from "../interfaces/components";
import useForm from "../hooks/useForm";

const CreateAccountModal: React.FC<IHomeModalProps> = ({ open, handleClose }) => {
    const { formData, handleChange, isFormValid, emailError } = useForm(
        { name: "", email: "", password: "" }
    );
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTermsAccepted(e.target.checked);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleModalClose = () => {
        handleClose();
    };

    return (
        <GenericModal
            open={open}
            handleClose={handleModalClose}
            title="Preencha os campos abaixo para criar sua conta corrente!"
            illustration="/images/illustration_registration.svg"
            buttonText="Criar conta"
            onSubmit={handleSubmit}
            isFormValid={isFormValid && termsAccepted}
        >
            <TextField
                name="name"
                label="Digite seu nome completo"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <TextField
                name="email"
                label="Digite seu email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
                error={emailError}
                helperText={emailError ? "Dado incorreto. Revise e digite novamente." : ""}
            />
            <TextField
                name="password"
                label="Digite sua senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <FormControlLabel
                control={<Checkbox checked={termsAccepted} onChange={handleCheckboxChange} required />}
                label="Li e estou ciente quanto às condições de tratamento dos meus dados."
            />
        </GenericModal>
    );
};

export default CreateAccountModal;
