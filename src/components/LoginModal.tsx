import React, { useState } from "react";
import { TextField, Link } from "@mui/material";
import GenericModal from "./GenericModal";
import { IHomeModalProps } from "../interfaces/components";
import useForm from "../hooks/useForm";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import { IFormData } from "../interfaces/forms";

const LoginModal: React.FC<IHomeModalProps> = ({ open, handleClose }) => {
    const { formData, handleChange, isFormValid, emailError } = useForm(
        { email: "", password: "", acceptanceTerms: true }
    );
    const [errorMessage, setErrorMessage] = useState("");
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const users = JSON.parse(sessionStorage.getItem('users') || '[]');
    
        const user = users.find((u: IFormData) => u.email === formData.email);
        const errorMessage = "Email ou senha incorreto. Por favor, revise os dados e tente novamente."
        if (user) {
            if (user.password === formData.password) {
                const userData = {
                    personalData: {
                        name: user.name,
                        email: user.email,
                    },
                    transactions: [
                        {
                            month: "Novembro",
                            date: "18/11/2024",
                            type: "Depósito",
                            amount: "150",
                            isNegative: false,
                        },
                        {
                            month: "Novembro",
                            date: "21/11/2024",
                            type: "Depósito",
                            amount: "100",
                            isNegative: false,
                        },
                        {
                            month: "Novembro",
                            date: "21/11/2024",
                            type: "Depósito",
                            amount: "50",
                            isNegative: false,
                        },
                        {
                            month: "Novembro",
                            date: "21/11/2024",
                            type: "Transferência",
                            amount: "500",
                            isNegative: true,
                        },
                    ],
                    investiments: {
                        totalAmount: "R$ 50.000,00",
                        fixedIncome: "R$ 36.000,00",
                        variableIncome: "R$ 14.000,00",
                    },
                    cards: {
                        physicalCard: [
                            {
                                userName: user.name,
                            }
                        ],
                        virtualCard: [
                            {
                                userName: user.name,
                            }
                        ]
                    },
                };
    
                login(userData);
                handleClose();
                router.push('/services');
            } else {
                setErrorMessage(errorMessage);
            }
        } else {
            setErrorMessage(errorMessage);
        }
    };
    
    const handleModalClose = () => {
        setErrorMessage("");
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
                error={emailError || !!errorMessage}
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
                error={!!errorMessage}
                helperText={errorMessage}
            />
            <Link href="#" variant="body2" sx={{ display: "block", textAlign: "right", mt: 1 }}>
                Esqueci a senha!
            </Link>
        </GenericModal>
    );
};

export default LoginModal;
