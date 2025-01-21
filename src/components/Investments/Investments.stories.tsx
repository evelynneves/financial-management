import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Investments from "./Investments";

export default {
    title: "Components/Investments",
    component: Investments,
} as Meta;

const Template: StoryFn = (args) => <Investments {...args} />;

export const Default = Template.bind({});
Default.args = {};
