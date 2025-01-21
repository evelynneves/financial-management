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
import Image from 'next/image';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div>
                    <Typography variant="body1" className={styles.listTitle}>Serviços</Typography>
                    <ul>
                        <li><Typography variant="body1">Conta corrente</Typography></li>
                        <li><Typography variant="body1">Conta PJ</Typography></li>
                        <li><Typography variant="body1">Cartão de crédito</Typography></li>
                    </ul>
                </div>
                <div>
                    <Typography variant="body1" className={styles.listTitle}>Contato</Typography>
                    <ul>
                        <li><Typography variant="body1">0800 004 250 08</Typography></li>
                        <li><Typography variant="body1">meajuda@bytebank.com.br</Typography></li>
                        <li><Typography variant="body1">ouvidoria@bytebank.com.br</Typography></li>
                    </ul>
                </div>
                <div className={styles.logo}>
                    <Typography variant="body1" className={styles.listTitle}>Desenvolvido por Alura</Typography>
                    <Image src="/images/logo_footer.svg" alt="Bytebank Logo" width={200} height={30}></Image>
                    <div className={styles.socialMedia}>
                        <a href="#"><Image aria-label="Instagram" src="/images/instagram_icon.svg" alt="Instagram Icon" width={25} height={25}></Image></a>
                        <a href="#"><Image aria-label="WhatsApp" src="/images/whatsapp_icon.svg" alt="Whatsapp Icon" width={25} height={25}></Image></a>
                        <a href="#"><Image aria-label="Youtube" src="/images/youtube_icon.svg" alt="Youtube Icon" width={25} height={25}></Image></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;