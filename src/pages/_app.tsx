import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Footer from "@/src/components/Footer/Footer";
import "../styles/globals.scss";
import Header from "../components/Header/Header";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { IAppLayoutProps } from "../interfaces/appLayout";
import HeaderLogged from "../components/HeaderLogged/HeaderLogged";

const theme = createTheme({
    palette: {
        primary: {
            main: "#47A138",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#000",
        },
    },
});

const AppLayout: React.FC<IAppLayoutProps> = ({ children}) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();
    const showHeaderFooter = !isLoggedIn || router.pathname === '/' || router.pathname === '/404';

    return (
        <>
            {showHeaderFooter ? <Header /> : <HeaderLogged userName="Evy" />}
            {children}
            {showHeaderFooter && <Footer />}
        </>
    );
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>
            </ThemeProvider>
        </AuthProvider>
    );
}
