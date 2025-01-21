import { Button, Typography } from "@mui/material";
import styles from "./Card.module.scss";
import Image from "next/image";
import classNames from "classnames";

interface CardProps {
    name: string;
    type: string;
    cardFunction: string;
}

const Card: React.FC<CardProps> = ({ name, type, cardFunction }) => {
    const cardClass = classNames(styles.card, {
        [styles.virtualCard]: type === "virtual",
    });
    return (
        <div className={styles.container}>
            <div className={cardClass}>
                <div className={styles.cardInfo}>
                    <Image
                        aria-label="Bytebank logo"
                        src="/images/card_logo.svg"
                        alt="Bytebank Logo"
                        width={46}
                        height={23}
                    ></Image>
                    <Typography variant="body1">Platinum</Typography>
                </div>
                <div className={styles.userInfo}>
                    <p>{name}</p>
                    <p>••••••••</p>
                </div>
            </div>
            <div className={styles.cardActions}>
                <Button variant="contained" className={styles.primaryButton}>
                    Configurar
                </Button>
                <Button variant="outlined" className={styles.outlinedButton}>
                    Bloquear
                </Button>
                <p>Função: {cardFunction}</p>
            </div>
        </div>
    );
};

export default Card;
