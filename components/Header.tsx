import { Button } from "@mui/material";
import Image from 'next/image';

import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Image src="logo.svg" alt="Bytebank Logo" width={100} height={30}></Image>
            <nav className={styles.nav}>
                <a href="#" aria-label="Sobre">Sobre</a>
                <a href="#" aria-label="Serviços">Serviços</a>
                <Button variant="contained" color="primary" className={styles.primaryButton}>Abrir minha conta</Button>
                <Button variant="outlined"color="primary" className={styles.primaryButton}>Já tenho conta</Button>
            </nav>
        </header>
    )

}

export default Header;