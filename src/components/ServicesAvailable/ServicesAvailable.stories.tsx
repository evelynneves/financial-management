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
