/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import React from 'react';
import { Typography, Box } from '@mui/material';

import styles from './ServicesAvailable.module.scss';
import { IServicesAvailableProps } from '@/src/interfaces/components';

const ServicesAvailable: React.FC<IServicesAvailableProps> = ({ onCardClick }) => {
    return (
        <Box>
            <Typography variant="h6" gutterBottom className={styles.servicesTitle}>
                Confira os serviços disponíveis
            </Typography>
            <Box className={styles.servicesGrid}>
                <Box className={styles.servicesItem}>
                    <img src="/images/loan_icon.svg" alt="Empréstimo" />
                    <Typography>Empréstimo</Typography>
                </Box>
                <Box className={styles.servicesItem} onClick={onCardClick}>
                    <img src="/images/card_icon.svg" alt="Meus cartões" />
                    <Typography>Meus cartões</Typography>
                </Box>
                <Box className={styles.servicesItem}>
                    <img src="/images/donations_icon.svg" alt="Doações" />
                    <Typography>Doações</Typography>
                </Box>
                <Box className={styles.servicesItem}>
                    <img src="/images/pix_icon.svg" alt="Pix" />
                    <Typography>Pix</Typography>
                </Box>
                <Box className={styles.servicesItem}>
                    <img src="/images/insurance_icon.svg" alt="Seguros" />
                    <Typography>Seguros</Typography>
                </Box>
                <Box className={styles.servicesItem}>
                    <img src="/images/cell_phone_credit_icon.svg" alt="Crédito celular" />
                    <Typography>Crédito celular</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ServicesAvailable;
