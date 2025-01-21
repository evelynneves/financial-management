/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import { Button, Container, Typography } from "@mui/material"
import Image from 'next/image';
import { useRouter } from "next/router";

import styles from '../styles/404.module.scss';

const Custom404: React.FC = () => {
    const router = useRouter();
    return (
        <Container className={styles.gradiente} maxWidth={false}>
            <div className={styles.errorPageContainer}>
                <Typography variant="body1" className={styles.title}>Ops! Não encontramos a página...</Typography>
                <Typography variant="body1" className={styles.description}>E olha que exploramos o universo procurando por ela! <br></br>
                    Que tal voltar e tentar novamente?
                </Typography>
                <Button onClick={() => router.push('/')} variant="contained" color="primary" className={styles.backButton}>Voltar ao início</Button>
                <Image src="/images/illustration_404.svg" alt="Ilustração 404" width={370} height={255} className={styles.illustration}></Image>
            </div>
        </Container>
    )
}

export default Custom404;