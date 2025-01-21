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

import { ISidebarProps } from "@/src/interfaces/components";
import Sidebar from "./Sidebar";

export default {
    title: "Components/Sidebar",
    component: Sidebar,
} as Meta;

const Template: StoryFn<ISidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Minha Sidebar",
    children: (
        <>
            <p>Conteúdo da Sidebar</p>
            <p>Mais conteúdo</p>
        </>
    ),
};
