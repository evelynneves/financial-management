import styles from "./ManageCards.module.scss";
import Card from "../Card/Card";
import { Typography } from "@mui/material";

const ManageCards = () => {
    return (
        <div className={styles.container}>
            <h1>Meus cartões</h1>
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
