import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import styles from "./HeaderLogged.module.scss";

const HeaderLogged = ({ userName }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar className={styles.toolbar}>
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
                >
                    <MenuItem onClick={handleClose}>Minha conta</MenuItem>
                    <MenuItem onClick={handleClose}>Configurações</MenuItem>
                    <MenuItem onClick={handleClose}>Sair</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderLogged;
