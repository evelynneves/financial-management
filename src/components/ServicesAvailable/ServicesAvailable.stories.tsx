import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { IServicesAvailableProps } from "@/src/interfaces/components";
import ServicesAvailable from "./ServicesAvailable";

export default {
    title: "Components/ServicesAvailable",
    component: ServicesAvailable,
} as Meta;

const Template: StoryFn<IServicesAvailableProps> = (args) => (
    <ServicesAvailable {...args} />
);

export const Default = Template.bind({});
Default.args = {
    onCardClick: () => console.log("Card clicked"),
};
