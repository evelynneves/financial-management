import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HeaderLogged from "./HeaderLogged";

export default {
    title: "Components/HeaderLogged",
    component: HeaderLogged,
} as Meta;

const Template: StoryFn = (args) => <HeaderLogged {...args} />;

export const Default = Template.bind({});
Default.args = {};
