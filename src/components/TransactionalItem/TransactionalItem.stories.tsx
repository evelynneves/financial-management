import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ITransactionItemWithActionsProps } from "@/src/interfaces/components";
import TransactionItem from "./TransactionalItem";

export default {
    title: "Components/TransactionItem",
    component: TransactionItem,
} as Meta;

const Template: StoryFn<ITransactionItemWithActionsProps> = (args) => (
    <TransactionItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    month: "Janeiro",
    date: new Date().toISOString(),
    type: "Depósito",
    amount: "500,00",
    isNegative: false,
    onDelete: () => console.log("Deleted"),
    index: 0,
    onSave: (index, type, amount, isNegative) =>
        console.log("Saved", { index, type, amount, isNegative }),
    hideActions: false,
};
