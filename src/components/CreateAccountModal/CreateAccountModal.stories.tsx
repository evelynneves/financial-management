import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CreateAccountModal from "./CreateAccountModal";
import { IHomeModalProps } from "@/src/interfaces/components";

export default {
    title: "Components/CreateAccountModal",
    component: CreateAccountModal,
} as Meta;

const Template: StoryFn<IHomeModalProps> = (args) => (
    <CreateAccountModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
    open: true,
    handleClose: () => console.log("Modal closed"),
};
