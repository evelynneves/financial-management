/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ITransactionalFormProps } from "@/src/interfaces/components";
import TransactionalForm from "./TransactionalForm";

export default {
    title: "Components/TransactionalForm",
    component: TransactionalForm,
} as Meta;

const Template: StoryFn<ITransactionalFormProps> = (args) => (
    <TransactionalForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
    transactionType: "deposito",
    amount: "100,00",
    isValidAmount: true,
    handleTypeChange: () => console.log("Type changed"),
    handleAmountChange: () => console.log("Amount changed"),
    handleSubmit: () => console.log("Form submitted"),
    hideSubmitButton: false,
};
