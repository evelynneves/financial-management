/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

module.exports = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@chromatic-com/storybook"
    ],

    framework: {
        name: "@storybook/nextjs",
        options: {}
    },

    docs: {},

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};
