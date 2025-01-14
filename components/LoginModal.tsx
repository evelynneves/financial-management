import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { TextField, Link } from "@mui/material";
import GenericModal from "./GenericModal";

interface LoginModalProps {
    open: boolean;
    handleClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailError(!emailPattern.test(value));
        }
    };

    useEffect(() => {
        const { email, password } = formData;
        const isFormFilled = !(email && password);
        setIsFormValid(isFormFilled && !emailError);
    }, [formData, emailError]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleModalClose = () => {
        setFormData({
            email: "",
            password: "",
        });
        setIsFormValid(false);
        setEmailError(false);
        handleClose();
    };

    return (
        <GenericModal
            open={open}
            handleClose={handleModalClose}
            title="Login"
            illustration="illustration_login.svg"
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
                helperText={
                    emailError
                        ? "Dado incorreto. Revise e digite novamente."
                        : ""
                }
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
            <Link
                href="#"
                variant="body2"
                sx={{ display: "block", textAlign: "right", mt: 1 }}
            >
                Esqueci a senha!
            </Link>
        </GenericModal>
    );
};

export default LoginModal;
