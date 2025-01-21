/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Footer from "@/src/components/Footer/Footer";
import "../styles/globals.scss";
import Header from "../components/Header/Header";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { IAppLayoutProps } from "../interfaces/appLayout";
import HeaderLogged from "../components/HeaderLogged/HeaderLogged";
import { MenuProvider } from "../contexts/MenuContext";

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    color: "#444444",
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#004D61",
                    },
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#004D61",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#003C4F",
                    },
                    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e57471",
                    },
                    "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e57471",
                    },
                },
            },
        },
    },
});

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();
    const showHeaderFooter =
        !isLoggedIn || router.pathname === "/" || router.pathname === "/404";

    return (
        <>
            {showHeaderFooter ? <Header /> : <HeaderLogged />}
            {children}
            {showHeaderFooter && <Footer />}
        </>
    );
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <MenuProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <AppLayout>
                        <Component {...pageProps} />
                    </AppLayout>
                </ThemeProvider>
            </MenuProvider>
        </AuthProvider>
    );
}
