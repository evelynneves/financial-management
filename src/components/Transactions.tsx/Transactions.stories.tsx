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
