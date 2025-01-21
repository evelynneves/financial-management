import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ManageCards from "./ManageCards";

export default {
    title: "Components/ManageCards",
    component: ManageCards,
} as Meta;

const Template: StoryFn = (args) => <ManageCards {...args} />;

export const Default = Template.bind({});
Default.args = {};
