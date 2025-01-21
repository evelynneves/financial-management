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
