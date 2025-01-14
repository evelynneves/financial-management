import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { TextField, Checkbox, FormControlLabel } from "@mui/material";
import GenericModal from "./GenericModal";

interface CreateAccountModalProps {
    open: boolean;
    handleClose: () => void;
}

interface FormData {
    name: string;
    email: string;
    password: string;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({ open, handleClose }) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    });
    const [termsAccepted, setTermsAccepted] = useState(false);
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

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTermsAccepted(e.target.checked);
    };

    useEffect(() => {
        const { name, email, password } = formData;
        const isFormFilled = !!(name && email && password);
        setIsFormValid(isFormFilled && termsAccepted && !emailError);
    }, [formData, termsAccepted, emailError]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleModalClose = () => {
        setFormData({
            name: "",
            email: "",
            password: "",
        });
        setTermsAccepted(false);
        setIsFormValid(false);
        setEmailError(false);
        handleClose();
    };

    return (
        <GenericModal
            open={open}
            handleClose={handleModalClose}
            title="Preencha os campos abaixo para criar sua conta corrente!"
            illustration="illustration_registration.svg"
            buttonText="Criar conta"
            onSubmit={handleSubmit}
            isFormValid={isFormValid}
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
            <FormControlLabel
                control={
                    <Checkbox
                        checked={termsAccepted}
                        onChange={handleCheckboxChange}
                        required
                    />
                }
                label="Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
            />
        </GenericModal>
    );
};

export default CreateAccountModal;
