/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import { useState, useEffect, ChangeEvent } from "react";

import { validateEmail } from "../utils/validateEmail";
import { IFormData, ILoginForm } from "../interfaces/forms";

const useForm = <T extends IFormData | ILoginForm>(initialData: T) => {
    const [formData, setFormData] = useState<T>(initialData);
    const [isFormValid, setIsFormValid] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === "email") {
            const isEmailValid = !validateEmail(value);
            setEmailError(!isEmailValid);
        }
    };

    useEffect(() => {
        const isFormFilled = Object.values(formData).every((value) => value !== "");
        const isTermsAccepted = formData.acceptanceTerms === true;
        setIsFormValid(isFormFilled && !emailError && isTermsAccepted);
    }, [formData, emailError]);
    

    return { formData, handleChange, isFormValid, emailError };
};

export default useForm;
