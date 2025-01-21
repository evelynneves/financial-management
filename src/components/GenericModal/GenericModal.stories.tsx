import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import GenericModal from "./GenericModal";
import { IGenericModalProps } from "@/src/interfaces/components";

export default {
    title: "Components/GenericModal",
    component: GenericModal,
} as Meta;

const Template: StoryFn<IGenericModalProps> = (args) => (
    <GenericModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
    open: true,
    handleClose: () => console.log("Modal closed"),
    title: "Example Title",
    illustration: "/images/illustration_example.svg",
    buttonText: "Submit",
    onSubmit: (e) => {
        e.preventDefault();
        console.log("Form submitted");
    },
    isFormValid: true,
    buttonColor: "#47A138",
};
