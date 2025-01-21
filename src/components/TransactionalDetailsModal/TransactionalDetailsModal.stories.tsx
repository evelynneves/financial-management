import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ITransactionDetailsModalProps } from "@/src/interfaces/components";
import TransactionDetailsModal from "./TransactionalDetailsModal";

export default {
    title: "Components/TransactionDetailsModal",
    component: TransactionDetailsModal,
} as Meta;

const Template: StoryFn<ITransactionDetailsModalProps> = (args) => (
    <TransactionDetailsModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
    open: true,
    onClose: () => console.log("Modal closed"),
    transaction: {
        type: "Compra",
        amount: "R$ 100,00",
        date: new Date().toISOString(),
        author: "João Silva",
    },
};
