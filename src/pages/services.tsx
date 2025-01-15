import React, { useState } from "react";
import {
    Container,
    Paper,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
} from "@mui/material";
import {
    Home,
    TransferWithinAStation,
    TrendingUp,
    MoreHoriz,
} from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { formatDate } from "../utils/formatDate";
import styles from "../styles/services.module.scss";

const Services = () => {
    const [showBalance, setShowBalance] = useState(true);

    const toggleBalanceVisibility = () => {
        setShowBalance(!showBalance);
    };

    const today = new Date();
    const formattedDate = formatDate(today);

    return (
        <Container className={styles.container}>
            <Box className={styles.gridContainer}>
                <Box className={styles.sidebarLeft}>
                    <List>
                        <ListItem component="li">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Início" />
                        </ListItem>
                        <ListItem component="li">
                            <ListItemIcon>
                                <TransferWithinAStation />
                            </ListItemIcon>
                            <ListItemText primary="Transferências" />
                        </ListItem>
                        <ListItem component="li">
                            <ListItemIcon>
                                <TrendingUp />
                            </ListItemIcon>
                            <ListItemText primary="Investimentos" />
                        </ListItem>
                        <ListItem component="li">
                            <ListItemIcon>
                                <MoreHoriz />
                            </ListItemIcon>
                            <ListItemText primary="Outros serviços" />
                        </ListItem>
                    </List>
                </Box>
                <Box className={styles.mainContent}>
                    <Box className={styles.topSection}>
                        <Box className={styles.topSectionRow1}>
                            <Typography
                                variant="h5"
                                className={styles.greeting}
                            >
                                Olá, Evy! :)
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                className={styles.date}
                            >
                                {formattedDate}
                            </Typography>
                        </Box>
                        <Box className={styles.topSectionRow2}>
                            <Box className={styles.balanceContainer}>
                                <Typography
                                    variant="h6"
                                    className={styles.balanceLabel}
                                >
                                    Saldo
                                </Typography>
                                <IconButton
                                    size="small"
                                    onClick={toggleBalanceVisibility}
                                >
                                    {showBalance ? (
                                        <VisibilityIcon
                                            className={styles.eyeIcon}
                                        />
                                    ) : (
                                        <VisibilityOffIcon
                                            className={styles.eyeIcon}
                                        />
                                    )}
                                </IconButton>
                            </Box>
                            <div className={styles.underline}></div>
                            <Typography
                                variant="body1"
                                className={styles.accountType}
                            >
                                Conta Corrente
                            </Typography>
                            <Typography
                                variant="h4"
                                className={styles.balanceAmount}
                            >
                                {showBalance ? "R$ 2.500,00" : "******"}
                            </Typography>
                        </Box>
                        <Box className={styles.topSectionRow3}></Box>
                    </Box>
                    <Box className={styles.bottomSection}>
                        <Typography variant="h6" gutterBottom className={styles.title}>
                            Confira os serviços disponíveis
                        </Typography>
                        <Box className={styles.servicesGrid}>
                            <Box className={styles.serviceItem}>
                                <img src="/images/loan_icon.svg"></img>
                                <Typography>Empréstimo</Typography>
                            </Box>
                            <Box className={styles.serviceItem}>
                                <img src="/images/card_icon.svg"></img>
                                <Typography>Meus cartões</Typography>
                            </Box>
                            <Box className={styles.serviceItem}>
                                <img src="/images/donations_icon.svg"></img>
                                <Typography>Doações</Typography>
                            </Box>
                            <Box className={styles.serviceItem}>
                                <img src="/images/pix_icon.svg"></img>
                                <Typography>Pix</Typography>
                            </Box>
                            <Box className={styles.serviceItem}>
                                <img src="/images/insurance_icon.svg"></img>
                                <Typography>Seguros</Typography>
                            </Box>
                            <Box className={styles.serviceItem}>
                                <img src="/images/cell_phone_credit_icon.svg"></img>
                                <Typography>Crédito celular</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.sidebarRight}>
                    <Paper className={styles.accountSummary}>
                        <Typography variant="h6">Extrato</Typography>
                        <Typography variant="body2">
                            Depósito R$ 150 18/11/2022
                        </Typography>
                        <Typography variant="body2">
                            Depósito R$ 100 21/11/2022
                        </Typography>
                        <Typography variant="body2">
                            Depósito R$ 50 21/11/2022
                        </Typography>
                        <Typography variant="body2">
                            Transferência -R$ 500 21/11/2022
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Container>
    );
};

export default Services;
