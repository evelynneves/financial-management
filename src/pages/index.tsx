import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.scss";
import CreateAccountModal from "@/src/components/CreateAccountModal";
import LoginModal from "@/src/components/LoginModal";

const HomePage: React.FC = () => {
    const [createAccountModalOpen, setCreateAccountModalOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const handleCreateAccountModalOpen = () => setCreateAccountModalOpen(true);
    const handleCreateAccountModalClose = () =>
        setCreateAccountModalOpen(false);

    const handleLoginModalOpen = () => setLoginModalOpen(true);
    const handleLoginModalClose = () => setLoginModalOpen(false);

    useEffect(() => {
        const users = [
            {
                name: "Joana da Silva Oliveira",
                email: "joanadasilvaoliveira@email.com.br",
                password: "desafio@2024",
                acceptanceTerms: true, 
            }, 
        ]; 
        sessionStorage.setItem('users', JSON.stringify(users)); 
    }, []);

    return (
        <Container className={styles.container} maxWidth={false}>
            <main className={styles.main}>
                <Typography variant="body1" className={styles.title}>
                    Experimente mais liberdade no controle da sua vida
                    financeira. <br />
                    Crie sua conta com a gente!
                </Typography>
                <Image
                    src="/images/illustration_banner.svg"
                    alt="Gráfico de barras e pessoa segurando dinheiro"
                    width={600}
                    height={400}
                    className={styles.illustration}
                />
                <div className={styles.buttons}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.primaryButton}
                        onClick={handleCreateAccountModalOpen}
                    >
                        Abrir conta
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={styles.outlinedButton}
                        onClick={handleLoginModalOpen}
                    >
                        Já tenho conta
                    </Button>
                </div>
            </main>
            <section className={styles.sectionFeatures}>
                <Typography variant="body2" className={styles.sectionTitle}>
                    Vantagens do nosso banco:
                </Typography>
                <div className={styles.features}>
                    <Box className={styles.featureBox}>
                        <Image
                            src="/images/gift_icon.svg"
                            alt="Ícone de Presente"
                            width={73}
                            height={56}
                            className={styles.featureIcon}
                        />
                        <Typography
                            variant="h6"
                            className={styles.featureTitle}
                        >
                            Conta e cartão gratuitos
                        </Typography>
                        <Typography className={styles.featureDescription}>
                            Isso mesmo, nossa conta é digital, sem custo fixo e
                            mais que isso: sem tarifa de manutenção.
                        </Typography>
                    </Box>

                    <Box className={styles.featureBox}>
                        <Image
                            src="/images/withdraw_icon.svg"
                            alt="Ícone de Saque"
                            width={73}
                            height={56}
                            className={styles.featureIcon}
                        />
                        <Typography
                            variant="h6"
                            className={styles.featureTitle}
                        >
                            Saques sem custo
                        </Typography>
                        <Typography className={styles.featureDescription}>
                            Você pode sacar gratuitamente 4x por mês de qualquer
                            Banco 24h.
                        </Typography>
                    </Box>

                    <Box className={styles.featureBox}>
                        <Image
                            src="images/points_icon.svg"
                            alt="Ícone de Pontos"
                            width={73}
                            height={56}
                            className={styles.featureIcon}
                        />
                        <Typography
                            variant="h6"
                            className={styles.featureTitle}
                        >
                            Programa de pontos
                        </Typography>
                        <Typography className={styles.featureDescription}>
                            Você pode acumular pontos com suas compras no
                            crédito sem pagar mensalidade!
                        </Typography>
                    </Box>

                    <Box className={styles.featureBox}>
                        <Image
                            src="/images/devices_icon.svg"
                            alt="Ícone de Dispositivos"
                            width={73}
                            height={56}
                            className={styles.featureIcon}
                        />
                        <Typography
                            variant="h6"
                            className={styles.featureTitle}
                        >
                            Seguro Dispositivos
                        </Typography>
                        <Typography className={styles.featureDescription}>
                            Seus dispositivos móveis (computador e laptop)
                            protegidos por uma mensalidade simbólica.
                        </Typography>
                    </Box>
                </div>
            </section>
            <CreateAccountModal
                open={createAccountModalOpen}
                handleClose={handleCreateAccountModalClose}
            />
            <LoginModal
                open={loginModalOpen}
                handleClose={handleLoginModalClose}
            />
        </Container>
    );
};

export default HomePage;
