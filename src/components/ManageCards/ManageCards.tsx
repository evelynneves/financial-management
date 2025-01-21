/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import { Typography } from "@mui/material";

import styles from "./ManageCards.module.scss";
import Card from "../Card/Card";

const ManageCards = () => {
    return (
        <div className={styles.manageCardsContainer}>
            <h1 className={styles.title}>Meus cartões</h1>
            <Typography variant="body1" className={styles.subtitle}>Cartão físico</Typography>
            <div className={styles.cards}>
                <Card
                    name ="Joana Fonseca Gomes"
                    type = "fisico"
                    cardFunction = "Débito/Crédito"
                />
            </div>

            <Typography variant="body1" className={styles.subtitle}>Cartão virtual</Typography>
            <div className={styles.cards}>
                <Card
                    name ="Joana Fonseca Gomes"
                    type = "virtual"
                    cardFunction ="Débito"
                />
            </div>
        </div>
    );
};

export default ManageCards;
