/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import React, { useEffect, useState } from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { formatDate } from "../utils/formatDate";
import styles from "../styles/services.module.scss";
import Transfers from "../components/Transfers/Transfer";
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
    const [balance, setBalance] = useState(0);
    const [firstName, setFirstName] = useState("Usuário");

    useEffect(() => { 
        if (typeof window !== "undefined") {
            const storedUserData = sessionStorage.getItem('userData');
            if (storedUserData) { 
                const userData: IUserData = JSON.parse(storedUserData);
                setTransactions(userData.transactions);
                const calculatedBalance = calculateBalance(userData.transactions);
                setBalance(calculatedBalance);

                const name = userData.personalData.name.split(" ")[0];
                    setFirstName(name);
    
            }

        }
    }, []);

    useEffect(() => {
        setShowCards(false);
    }, [selectedMenuItem]);
    

    const calculateBalance = (transactions: ITransactionItemProps[]): number => {
        return transactions.reduce((total, transaction) => {
            const amount = parseFloat(transaction.amount);
            return transaction.isNegative ? total - amount : total + amount;
        }, 0);
    };

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
                return <Transfers />;
            case "Investimentos":
                return <Investments />;
            case "Outros serviços":
                return <ServicesAvailable onCardClick={handleCardClick} />;
            default:
                return null;
        }
    };

    const handleTransactionComplete = (transaction: ITransactionItemProps) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = [transaction, ...prevTransactions];
            const newBalance = calculateBalance(updatedTransactions);
            setBalance(newBalance);
            return updatedTransactions;
        });
    };

    const handleDeleteTransaction = (index: number) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions];
            updatedTransactions.splice(index, 1);
            const newBalance = calculateBalance(updatedTransactions);

            const storedUserData = sessionStorage.getItem('userData');
            if (storedUserData) {
                const userData: IUserData = JSON.parse(storedUserData);
                userData.transactions = updatedTransactions;
                sessionStorage.setItem('userData', JSON.stringify(userData));
            }

            setBalance(newBalance);
            return updatedTransactions;
        });
    };

    const handleSaveTransaction = (index: number, newType: string, newAmount: string, isNegative: boolean) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions];
            updatedTransactions[index] = { ...updatedTransactions[index], type: newType, amount: newAmount, isNegative };

            const storedUserData = sessionStorage.getItem('userData');
            if (storedUserData) {
                const userData: IUserData = JSON.parse(storedUserData);
                userData.transactions = updatedTransactions;
                sessionStorage.setItem('userData', JSON.stringify(userData));
            }

            const newBalance = calculateBalance(updatedTransactions);
            setBalance(newBalance);
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
                                Olá, {firstName}! :)
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
                                            className={styles.visibleIcon}
                                        />
                                    ) : (
                                        <VisibilityOffIcon
                                            className={styles.visibleIcon}
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
                                {showBalance ? `R$ ${balance.toFixed(2)}` : "******"}
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
                            index={index}
                            onSave={handleSaveTransaction}
                        />
                    ))}
                </Sidebar>
            </Box>
        </Container>
    );
};

export default Services;
