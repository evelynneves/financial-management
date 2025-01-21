/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

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
