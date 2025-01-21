/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import React from "react";
import { Typography, Box } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-datalabels';

import styles from "./Investments.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [
        "Fundos de investimento",
        "Tesouro Direto",
        "Previdência Privada",
        "Bolsa de Valores",
    ],
    datasets: [
        {
            data: [30, 20, 25, 25],
            backgroundColor: ["#2567F9", "#8F3CFF", "#FF3C82", "#F1823D"],
            hoverBackgroundColor: ["#2567F9", "#8F3CFF", "#FF3C82", "#F1823D"],
            borderWidth: 0,
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
        legend: {
            display: false,
        },
    },
    elements: {
        arc: {
            borderWidth: 0,
        },
    },
};

const Investments = () => {
    return (
        <Box className={styles.investmentsContainer}>
            <h1 className={styles.title}>Investimentos</h1>
            <Typography variant="h6" className={styles.total}>
                Total: R$ 50.000,00
            </Typography>

            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <Typography variant="h6" className={styles.cardTitle}>
                        Renda Fixa
                    </Typography>
                    <Typography variant="body1" className={styles.cardAmount}>
                        R$ 36.000,00
                    </Typography>
                </div>
                <div className={styles.card}>
                    <Typography variant="h6" className={styles.cardTitle}>
                        Renda Variável
                    </Typography>
                    <Typography variant="body1" className={styles.cardAmount}>
                        R$ 14.000,00
                    </Typography>
                </div>
            </div>

            <Typography variant="h5" className={styles.statistics}>
                Estatísticas
            </Typography>
            <div className={styles.statisticsCard}>
                <div className={styles.chartLegendContainer}>
                    <div className={styles.chart}>
                        <Doughnut data={data} options={options} />
                    </div>
                    <div className={styles.legend}>
                        <Typography variant="body1">
                            <span className={styles.blue}>●</span> Fundos de investimento
                        </Typography>
                        <Typography variant="body1">
                            <span className={styles.purple}>●</span> Tesouro Direto
                        </Typography>
                        <Typography variant="body1">
                            <span className={styles.pink}>●</span> Previdência Privada
                        </Typography>
                        <Typography variant="body1">
                            <span className={styles.orange}>●</span> Bolsa de Valores
                        </Typography>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Investments;
