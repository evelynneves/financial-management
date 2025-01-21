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

import { ICardProps } from "@/src/interfaces/components";
import Card from "./Card";

export default {
    title: "Components/Card",
    component: Card,
} as Meta;

const Template: StoryFn<ICardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "Joana da Silva Oliveira",
    type: "physical",
    cardFunction: "Crédito",
};

export const VirtualCard = Template.bind({});
VirtualCard.args = {
    name: "Joana da Silva Oliveira",
    type: "virtual",
    cardFunction: "Débito",
};
