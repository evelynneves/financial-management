import { Box, Container, Typography } from "@mui/material";
import styles from '../styles/Home.module.scss';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <Container className={styles.container}>
        <div className={styles.gradiente}>
            <main className={styles.main}>
                <Typography variant="body1" className={styles.title}>
                    Experimente mais liberdade no controle da sua vida financeira. <br></br>
                    Crie sua conta com a gente!
                </Typography>
                <Image src="/illustration_banner.svg" alt="Gráfico de barras e pessoa segurando dinheiro" width={600} height={400} className={styles.illustration}></Image>
            </main>
            <section className={styles.sectionFeatures}>
                <Typography variant="body2" className={styles.sectionTitle}>Vantagens do nosso banco:</Typography>
                <div className={styles.features}>
                    <Box className={styles.featureBox}>
                        <Image src="/gift_icon.svg" alt="Ícone de Presente" width={73} height={56} className={styles.featureIcon}></Image>
                        <Typography variant="h6" className={styles.featureTitle}>Conta e cartão gratuitos</Typography>
                        <Typography className={styles.featureDescription}>Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.</Typography>
                    </Box>

                    <Box className={styles.featureBox}>
                        <Image src="/withdraw_icon.svg" alt="Ícone de Saque" width={73} height={56} className={styles.featureIcon}></Image>
                        <Typography variant="h6" className={styles.featureTitle}>Saques sem custo</Typography>
                        <Typography className={styles.featureDescription}>Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.</Typography>
                    </Box>

                    <Box className={styles.featureBox}>
                        <Image src="/points_icon.svg" alt="Ícone de Pontos" width={73} height={56} className={styles.featureIcon}></Image>
                        <Typography variant="h6" className={styles.featureTitle}>Programa de pontos</Typography>
                        <Typography className={styles.featureDescription}>Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!</Typography>
                    </Box>

                    <Box className={styles.featureBox}>
                        <Image src="/devices_icon.svg" alt="Ícone de Dispositivos" width={73} height={56} className={styles.featureIcon}></Image>
                        <Typography variant="h6" className={styles.featureTitle}>Seguro Dispositivos</Typography>
                        <Typography className={styles.featureDescription}>Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.</Typography>
                    </Box>
                </div>
            </section>
        </div>
    </Container>
  );
};

export default HomePage;