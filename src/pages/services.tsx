import React, { useState } from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { formatDate } from "../utils/formatDate";
import styles from "../styles/services.module.scss";
import Transferencias from "../components/Transfers/Transfer";
import Investments from "../components/Investments/Investments";
import OutrosServicos from "../components/OtherServices/OtherServices";
import TransactionItem from "../components/TransactionalItem/TransactionalItem";
import MenuList from "../components/MenuList/MenuList";
import Sidebar from "../components/Sidebar/Sidebar";

const Services = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState("Início");
    const [showBalance, setShowBalance] = useState(true);

    const toggleBalanceVisibility = () => {
        setShowBalance(!showBalance);
    };

    const handleMenuItemClick = (menuItem: string) => {
        setSelectedMenuItem(menuItem);
    };

    const renderContent = () => {
        switch (selectedMenuItem) {
            case "Início":
                return "";
            case "Transferências":
                return <Transferencias />;
            case "Investimentos":
                return <Investments />;
            case "Outros serviços":
                return <OutrosServicos />;
            default:
                return null;
        }
    };

    const today = new Date();
    const formattedDate = formatDate(today);

    return (
        <Container className={styles.container} maxWidth={false}>
            <Box className={styles.listItemContainer}>
                <MenuList
                    selectedMenuItem={selectedMenuItem}
                    handleMenuItemClick={handleMenuItemClick}
                />
            </Box>
            <Box className={styles.gridContainer}>
                <div className={styles.leftSideBar}>
                    <Sidebar>
                        <MenuList
                            selectedMenuItem={selectedMenuItem}
                            handleMenuItemClick={handleMenuItemClick}
                        />
                    </Sidebar>
                </div>
                <Box className={styles.mainContent}>
                    <Box className={styles.topSection}>
                        <Box className={styles.topSectionRow1}>
                            <Typography variant="h5" className={styles.greeting}>
                                Olá, Evy! :)
                            </Typography>
                            <Typography variant="subtitle1" className={styles.date}>
                                {formattedDate}
                            </Typography>
                        </Box>
                        <Box className={styles.topSectionRow2}>
                            <Box className={styles.balanceContainer}>
                                <Typography variant="h6" className={styles.balanceLabel}>
                                    Saldo
                                </Typography>
                                <IconButton size="small" onClick={toggleBalanceVisibility}>
                                    {showBalance ? (
                                        <VisibilityIcon className={styles.eyeIcon} />
                                    ) : (
                                        <VisibilityOffIcon className={styles.eyeIcon} />
                                    )}
                                </IconButton>
                            </Box>
                            <div className={styles.underline}></div>
                            <Typography variant="body1" className={styles.accountType}>
                                Conta Corrente
                            </Typography>
                            <Typography variant="h4" className={styles.balanceAmount}>
                                {showBalance ? "R$ 2.500,00" : "******"}
                            </Typography>
                        </Box>
                        <Box className={styles.topSectionRow3}></Box>
                    </Box>
                    {selectedMenuItem !== "Início" && (
                        <Box className={styles.bottomSection}>
                            {renderContent()}
                        </Box>
                    )}
                </Box>
                <Sidebar title="Extrato">
                    <TransactionItem
                        month="Novembro"
                        date="18/11/4"
                        type="Depósito"
                        amount="150"
                        isNegative={false}
                    />
                    <TransactionItem
                        month="Novembro"
                        date="21/11/2024"
                        type="Depósito"
                        amount="100"
                        isNegative={false}
                    />
                    <TransactionItem
                        month="Novembro"
                        date="21/11/2024"
                        type="Depósito"
                        amount="50"
                        isNegative={false}
                    />
                    <TransactionItem
                        month="Novembro"
                        date="21/11/2024"
                        type="Transferência"
                        amount="500"
                        isNegative={true}
                    />
                </Sidebar>
            </Box>
        </Container>
    );
};

export default Services;
