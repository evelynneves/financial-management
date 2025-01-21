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
