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
