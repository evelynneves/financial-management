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
