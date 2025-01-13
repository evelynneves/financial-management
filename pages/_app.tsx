import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { AuthProvider, useAuth } from "../contexts/authContext";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

interface AppLayoutProps {
    children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children}) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();
    const showHeaderFooter = !isLoggedIn || router.pathname === '/' || router.pathname === '/404';

    return (
        <>
            {showHeaderFooter && <Header />}
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
