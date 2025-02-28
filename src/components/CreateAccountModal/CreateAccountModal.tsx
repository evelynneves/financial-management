/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import React, { ChangeEvent } from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useRouter } from "next/router";

import { IHomeModalProps } from "@/src/interfaces/components";
import useForm from "@/src/hooks/useForm";
import { useAuth } from "@/src/contexts/AuthContext";
import GenericModal from "../GenericModal/GenericModal";

const CreateAccountModal: React.FC<IHomeModalProps> = ({
    open,
    handleClose,
}) => {
    const { formData, handleChange, isFormValid, emailError } = useForm({
        name: "",
        email: "",
        password: "",
        acceptanceTerms: false,
    });
    const { login } = useAuth();
    const router = useRouter();

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleChange({
            target: { name: "acceptanceTerms", value: e.target.checked },
        } as unknown as ChangeEvent<HTMLInputElement>);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        const users = JSON.parse(sessionStorage.getItem("users") || "[]");
        const newUser = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            acceptanceTerms: formData.acceptanceTerms,
        };

        users.push(newUser);
        sessionStorage.setItem("users", JSON.stringify(users));

        const userData = {
            personalData: {
                name: formData.name,
                email: formData.email,
            },
            transactions: [],
            investiments: {
                totalAmount: "R$ 0,00",
                fixedIncome: "R$ 0,00",
                variableIncome: "R$ 0,00",
            },
            cards: {
                physicalCard: [
                    {
                        userName: formData.name,
                    },
                ],
                virtualCard: [
                    {
                        userName: formData.name,
                    },
                ],
            },
        };

        login(userData);
        handleClose();
        router.push("/services");
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
            isFormValid={isFormValid}
            buttonColor="#FF5031"
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
                        checked={formData.acceptanceTerms}
                        onChange={handleCheckboxChange}
                        required
                        sx={{ color: '#3d8f328', '&.Mui-checked': { color: '#47a138' }}}
                    />
                }
                label="Li e estou ciente quanto às condições de tratamento dos meus dados."
            />
        </GenericModal>
    );
};

export default CreateAccountModal;
