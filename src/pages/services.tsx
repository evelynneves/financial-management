import React, { useEffect, useState } from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { formatDate } from "../utils/formatDate";
import styles from "../styles/services.module.scss";
import Transferencias from "../components/Transfers/Transfer";
import Investments from "../components/Investments/Investments";
import TransactionItem from "../components/TransactionalItem/TransactionalItem";
import MenuList from "../components/MenuList/MenuList";
import Sidebar from "../components/Sidebar/Sidebar";
import { useMenu } from "../contexts/MenuContext";
import ServicesAvailable from "../components/ServicesAvailable/ServicesAvailable";
import ManageCards from "../components/ManageCards/ManageCards";
import Transactions from "../components/Transactions.tsx/Transactions";
import { ITransactionItemProps } from "../interfaces/components";
import { IUserData } from "../interfaces/auth";

const Services = () => {
    const { selectedMenuItem, setSelectedMenuItem } = useMenu();
    const [showBalance, setShowBalance] = useState(true);
    const [showCards, setShowCards] = useState(false);
    const [transactions, setTransactions] = useState<ITransactionItemProps[]>([]);

    useEffect(() => { 
        const storedUserData = sessionStorage.getItem('userData');
        if (storedUserData) { 
            const userData: IUserData = JSON.parse(storedUserData);
            setTransactions(userData.transactions); 
        }
    }, []);

    const toggleBalanceVisibility = () => {
        setShowBalance(!showBalance);
    };

    const handleCardClick = () => {
        setShowCards(true);
    };

    const renderContent = () => {
        if (showCards) {
            return <ManageCards />;
        }

        switch (selectedMenuItem) {
            case "Início":
                return <Transactions onTransactionComplete={handleTransactionComplete} />;
            case "Transferências":
                return <Transferencias />;
            case "Investimentos":
                return <Investments />;
            case "Outros serviços":
                return <ServicesAvailable onCardClick={handleCardClick} />;
            default:
                return null;
        }
    };

    const handleTransactionComplete = (transaction: ITransactionItemProps) => {
        setTransactions((prevTransactions) => [transaction, ...prevTransactions]);
    };

    const handleDeleteTransaction = (index: number) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions];
            updatedTransactions.splice(index, 1);

            const storedUserData = sessionStorage.getItem('userData');
            if (storedUserData) {
                const userData: IUserData = JSON.parse(storedUserData);
                userData.transactions = updatedTransactions;
                sessionStorage.setItem('userData', JSON.stringify(userData));
            }
            return updatedTransactions;
        });
    };

    const today = new Date();
    const formattedDate = formatDate(today);

    return (
        <Container className={styles.container} maxWidth={false}>
            <Box className={styles.listItemContainer}>
                <MenuList
                    selectedMenuItem={selectedMenuItem}
                    handleMenuItemClick={setSelectedMenuItem}
                />
            </Box>
            <Box className={styles.gridContainer}>
                <div className={styles.leftSideBar}>
                    <Sidebar>
                        <MenuList
                            selectedMenuItem={selectedMenuItem}
                            handleMenuItemClick={setSelectedMenuItem}
                        />
                    </Sidebar>
                </div>
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
                        {renderContent()}
                    </Box>
                </Box>
                <Sidebar title="Extrato">
                    {transactions.map((transaction, index) => (
                        <TransactionItem
                            key={index}
                            month={transaction.month}
                            date={transaction.date}
                            type={transaction.type}
                            amount={transaction.amount}
                            isNegative={transaction.isNegative}
                            onDelete={() => handleDeleteTransaction(index)}
                        />
                    ))}
                </Sidebar>
            </Box>
        </Container>
    );
};

export default Services;
