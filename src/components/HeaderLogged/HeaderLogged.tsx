import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Box,
    Drawer,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./HeaderLogged.module.scss";
import MenuList from "../../components/MenuList/MenuList";
import { useMenu } from "../../contexts/MenuContext";

const HeaderLogged: React.FC<{ userName: string }> = ({ userName }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMediumScreen = useMediaQuery('(min-width: 361px) and (max-width: 719px)');
    const isExtraSmallScreen = useMediaQuery('(max-width: 360px)');
    const { selectedMenuItem, setSelectedMenuItem } = useMenu();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const handleMenuItemClick = (menuItem: string) => {
        setSelectedMenuItem(menuItem);
        setDrawerOpen(false);
    };

    return (
        <AppBar position="static">
            <Toolbar className={styles.toolbar}>
                {(isMediumScreen || isExtraSmallScreen) ? (
                    <Box sx={{ display: 'block', order: -1 }}>
                        <IconButton onClick={toggleDrawer(true)} edge="start" style={{ color: "#FF5031" }}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                ) : null}
                <Box className={styles.rightAligned}>
                    <Typography variant="h6" className={styles.userName}>{userName}</Typography>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <img
                            src="images/avatar.svg"
                            alt="Avatar"
                            className={styles.avatarImg}
                        />
                    </IconButton>
                </Box>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Minha conta</MenuItem>
                    <MenuItem onClick={handleClose}>Configurações</MenuItem>
                    <MenuItem onClick={handleClose}>Sair</MenuItem>
                </Menu>
            </Toolbar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ textAlign: 'right', padding: 2, backgroundColor: '#004d61' }}>
                    <IconButton onClick={toggleDrawer(false)} style={{ color: '#47a138' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <MenuList selectedMenuItem={selectedMenuItem} handleMenuItemClick={handleMenuItemClick} />
            </Drawer>
        </AppBar>
    );
};

export default HeaderLogged;
