import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Transfers from "./Transfer";

export default {
    title: "Components/Transfers",
    component: Transfers,
} as Meta;

const Template: StoryFn = (args) => <Transfers {...args} />;

export const Default = Template.bind({});
Default.args = {};
