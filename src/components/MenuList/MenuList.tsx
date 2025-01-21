/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

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
