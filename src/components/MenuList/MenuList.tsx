import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
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
                        <ListItemText primary={item} />
                    </div>
                    <div className={styles.underline}></div>
                </ListItem>
            ))}
        </List>
    );
};

export default MenuList;
