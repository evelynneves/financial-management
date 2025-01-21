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

import { IMenuListProps } from "@/src/interfaces/components";
import MenuList from "./MenuList";

export default {
    title: "Components/MenuList",
    component: MenuList,
} as Meta;

const Template: StoryFn<IMenuListProps> = (args) => <MenuList {...args} />;

export const Default = Template.bind({});
Default.args = {
    selectedMenuItem: "Início",
    handleMenuItemClick: (item) => console.log(item),
};
