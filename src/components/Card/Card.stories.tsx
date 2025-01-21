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
