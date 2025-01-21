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
import { Typography, Box } from "@mui/material";

import styles from "./Transfers.module.scss";
import { ITransactionItemProps } from "../../interfaces/components";
import TransactionItem from "../TransactionalItem/TransactionalItem";
import { IUserData } from "@/src/interfaces/auth";

const Transfers = () => {
    const [transactions, setTransactions] = useState<ITransactionItemProps[]>(
        []
    );

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUserData = sessionStorage.getItem("userData");
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                setTransactions(userData.transactions);
            }
        }
    }, []);

    const handleSaveTransaction = (
        index: number,
        newType: string,
        newAmount: string,
        isNegative: boolean
    ) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions];
            updatedTransactions[index] = {
                ...updatedTransactions[index],
                type: newType,
                amount: newAmount,
                isNegative,
            };

            const storedUserData = sessionStorage.getItem("userData");
            if (storedUserData) {
                const userData: IUserData = JSON.parse(storedUserData);
                userData.transactions = updatedTransactions;
                sessionStorage.setItem("userData", JSON.stringify(userData));
            }

            return updatedTransactions;
        });
    };

    const handleDeleteTransaction = (index: number) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions];
            updatedTransactions.splice(index, 1);
            const storedUserData = sessionStorage.getItem("userData");
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                userData.transactions = updatedTransactions;
                sessionStorage.setItem("userData", JSON.stringify(userData));
            }
            return updatedTransactions;
        });
    };

    return (
        <Box className={styles.transferContainer}>
            <Typography variant="h6" className={styles.title}>
                Lista de Transferências
            </Typography>
            <Box className={styles.transferList}>
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
                        hideActions={true}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Transfers;
