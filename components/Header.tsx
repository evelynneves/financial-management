import { Button, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { useState } from "react";
import CreateAccountModal from './CreateAccountModal';
import LoginModal from './LoginModal';

import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
  const isMediumScreen = useMediaQuery('(min-width: 361px) and (max-width: 719px)');
  const isExtraSmallScreen = useMediaQuery('(max-width: 360px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [createAccountModalOpen, setCreateAccountModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleCreateAccountModalOpen = () => setCreateAccountModalOpen(true);
  const handleCreateAccountModalClose = () => setCreateAccountModalOpen(false);
  
  const handleLoginModalOpen = () => setLoginModalOpen(true);
  const handleLoginModalClose = () => setLoginModalOpen(false);

  return (
    <header className={styles.header}>
      {isExtraSmallScreen ? (
        <Box sx={{ display: 'block', order: -1 }}>
          <IconButton onClick={toggleDrawer(true)} edge="start" style={{ color: "#47a138" }}>
            <MenuIcon />
          </IconButton>
        </Box>
      ) : null}
      <Image
        src={isMediumScreen ? 'small_logo.svg' : 'logo.svg'}
        alt="Bytebank Logo"
        width={isMediumScreen ? 40 : 100}
        height={isMediumScreen ? 25 : 30}
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <a href="#" aria-label="About">Sobre</a>
        <a href="#" aria-label="Services">Serviços</a>
        <div className={styles.buttonContainer}>
          <Button variant="contained" className={styles.primaryButton} onClick={handleCreateAccountModalOpen}>Abrir conta</Button>
          <Button variant="outlined" className={styles.primaryButton} onClick={handleLoginModalOpen}>Já tenho conta</Button>
        </div>
      </nav>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ textAlign: 'right', padding: 2, backgroundColor: '#004d61' }}>
          <IconButton onClick={toggleDrawer(false)} style={{ color: '#47a138' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List className={styles.drawerContent}>
          <ListItem component="a" href="#">
            <ListItemText primary="Sobre" />
          </ListItem>
          <ListItem component="a" href="#">
            <ListItemText primary="Serviços" />
          </ListItem>
        </List>
      </Drawer>
      <CreateAccountModal open={createAccountModalOpen} handleClose={handleCreateAccountModalClose} />
      <LoginModal open={loginModalOpen} handleClose={handleLoginModalClose} />
    </header>
  );
};

export default Header;
