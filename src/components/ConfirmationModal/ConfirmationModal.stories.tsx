import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ConfirmationModal from "./ConfirmationModal";
import { IConfirmationModalProps } from "@/src/interfaces/components";

export default {
    title: "Components/ConfirmationModal",
    component: ConfirmationModal,
} as Meta;

const Template: StoryFn<IConfirmationModalProps> = (args) => (
    <ConfirmationModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
    open: true,
    onClose: () => alert("Cancelado"),
    onConfirm: () => alert("Confirmado"),
};

export const Closed = Template.bind({});
Closed.args = {
    open: false,
    onClose: () => alert("Cancelado"),
    onConfirm: () => alert("Confirmado"),
};
