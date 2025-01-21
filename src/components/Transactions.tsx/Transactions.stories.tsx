import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ITransactionItemProps, ITransactionsProps } from "@/src/interfaces/components";
import Transactions from "./Transactions";

export default {
    title: "Components/Transactions",
    component: Transactions,
} as Meta;

const Template: StoryFn<ITransactionsProps> = (args) => (
    <Transactions {...args} />
);

export const Default = Template.bind({});
Default.args = {
    onTransactionComplete: (transaction: ITransactionItemProps) =>
        console.log("Transaction completed", transaction),
};
