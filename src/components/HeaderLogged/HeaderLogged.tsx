/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import React, { useState, useEffect } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

import styles from "./HeaderLogged.module.scss";
import MenuList from "../../components/MenuList/MenuList";
import { useMenu } from "../../contexts/MenuContext";
import { useAuth } from "../../contexts/AuthContext";
import { getLoggedInUser } from "@/src/utils/getLoggedUser";

const HeaderLogged: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMediumScreen = useMediaQuery(
        "(min-width: 361px) and (max-width: 719px)"
    );
    const isExtraSmallScreen = useMediaQuery("(max-width: 360px)");
    const { selectedMenuItem, setSelectedMenuItem } = useMenu();
    const { logout } = useAuth();
    const router = useRouter();

    const [userName, setUserName] = useState("Usuário Desconhecido");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const loggedInUser = getLoggedInUser();
            if (loggedInUser) {
                setUserName(loggedInUser.personalData.name);
            }
        }
    }, []);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        handleClose();
        router.push("/");
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
                {(isMediumScreen || isExtraSmallScreen) && (
                    <Box sx={{ display: "block", order: -1 }}>
                        <IconButton
                            onClick={toggleDrawer(true)}
                            edge="start"
                            style={{ color: "#FF5031" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                )}
                <Box className={styles.rightAligned}>
                    <Typography variant="h6" className={styles.userName}>
                        {userName}
                    </Typography>
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
                    className={styles.menu}
                >
                    <MenuItem onClick={handleClose}>Minha conta</MenuItem>
                    <MenuItem onClick={handleClose}>Configurações</MenuItem>
                    <MenuItem onClick={handleLogout}>Sair</MenuItem>
                </Menu>
            </Toolbar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                className={styles.drawerContent}
                sx={{
                    '& .MuiDrawer-paper': {
                        height: 'auto',
                    },
                }}
            >
                <Box
                    sx={{textAlign: "right", backgroundColor: '#E4EDE3'}}>
                    <IconButton
                        onClick={toggleDrawer(false)}
                        style={{ color: "#47a138" }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <MenuList
                    selectedMenuItem={selectedMenuItem}
                    handleMenuItemClick={handleMenuItemClick}
                />
            </Drawer>
        </AppBar>
    );
};

export default HeaderLogged;
