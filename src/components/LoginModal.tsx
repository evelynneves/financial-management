import React from "react";
import { TextField, Link } from "@mui/material";
import GenericModal from "./GenericModal";
import { IHomeModalProps } from "../interfaces/components";
import useForm from "../hooks/useForm";

const LoginModal: React.FC<IHomeModalProps> = ({ open, handleClose }) => {
    const { formData, handleChange, isFormValid, emailError } = useForm(
        { email: "", password: "" }
    );

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
            title="Login"
            illustration="/images/illustration_login.svg"
            buttonText="Acessar"
            onSubmit={handleSubmit}
            isFormValid={isFormValid}
        >
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
            <Link href="#" variant="body2" sx={{ display: "block", textAlign: "right", mt: 1 }}>
                Esqueci a senha!
            </Link>
        </GenericModal>
    );
};

export default LoginModal;
