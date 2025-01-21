import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import EditTransactionModal from "./EditTransactionalModal";
import { IEditTransactionModalProps } from "@/src/interfaces/components";


export default {
    title: "Components/EditTransactionModal",
    component: EditTransactionModal,
} as Meta;

const Template: StoryFn<IEditTransactionModalProps> = (args) => (
    <EditTransactionModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
    open: true,
    onClose: () => alert("Cancelado"),
    onSave: (type, amount, isNegative) =>
        alert(`Salvo: ${type}, ${amount}, ${isNegative}`),
    initialType: "Depósito",
    initialAmount: "1000",
};

export const Closed = Template.bind({});
Closed.args = {
    open: false,
    onClose: () => alert("Cancelado"),
    onSave: (type, amount, isNegative) =>
        alert(`Salvo: ${type}, ${amount}, ${isNegative}`),
    initialType: "Transferência",
    initialAmount: "500",
};
