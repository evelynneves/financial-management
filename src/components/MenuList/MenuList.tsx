import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Home, TransferWithinAStation, TrendingUp, MoreHoriz } from "@mui/icons-material";
import styles from "./MenuList.module.scss";
import { IMenuListProps } from "@/src/interfaces/components";

const MenuList: React.FC<IMenuListProps> = ({ selectedMenuItem, handleMenuItemClick }) => {
    return (
        <List className={styles.list}>
            {["Início", "Transferências", "Investimentos", "Outros serviços"].map((item) => (
                <ListItem
                    key={item}
                    component="li"
                    className={`${styles.listItem} ${selectedMenuItem === item ? styles.itemSelected : ""}`}
                    onClick={() => handleMenuItemClick(item)}
                >
                    <div className={styles.listItemContent}>
                        <ListItemIcon className={styles.listItemIcon}>
                            {item === "Início" && <Home />}
                            {item === "Transferências" && <TransferWithinAStation />}
                            {item === "Investimentos" && <TrendingUp />}
                            {item === "Outros serviços" && <MoreHoriz />}
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </div>
                    <div className={styles.underline}></div>
                </ListItem>
            ))}
        </List>
    );
};

export default MenuList;
