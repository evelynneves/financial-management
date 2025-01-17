import React from "react";
import { Typography, Box } from "@mui/material";
import styles from './ServicesAvailable.module.scss';

const ServicesAvailable = () => {
    return (
        <Box>
            <Typography variant="h6" gutterBottom className={styles.servicesTitle}>
                Confira os serviços disponíveis
            </Typography>
            <Box className={styles.servicesGrid}>
                <Box className={styles.servicesItem}>
                    <img src="/images/loan_icon.svg"></img>
                    <Typography>Empréstimo</Typography>
                </Box>
                <Box className={styles.servicesItem}>
                    <img src="/images/card_icon.svg"></img>
                    <Typography>Meus cartões</Typography>
                </Box>
                <Box className={styles.servicesItem}>
                    <img src="/images/donations_icon.svg"></img>
                    <Typography>Doações</Typography>
                </Box>
                <Box className={styles.servicesItem}>
                    <img src="/images/pix_icon.svg"></img>
                    <Typography>Pix</Typography>
                </Box>
                <Box className={styles.servicesItem}>
                    <img src="/images/insurance_icon.svg"></img>
                    <Typography>Seguros</Typography>
                </Box>
                <Box className={styles.servicesItem}>
                    <img src="/images/cell_phone_credit_icon.svg"></img>
                    <Typography>Crédito celular</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ServicesAvailable;
