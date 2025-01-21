import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { IHomeModalProps } from "../../interfaces/components";
import LoginModal from "./LoginModal";

export default {
    title: "Components/LoginModal",
    component: LoginModal,
} as Meta;

const Template: StoryFn<IHomeModalProps> = (args) => <LoginModal {...args} />;

export const Default = Template.bind({});
Default.args = {
    open: true,
    handleClose: () => console.log("Modal closed"),
};
