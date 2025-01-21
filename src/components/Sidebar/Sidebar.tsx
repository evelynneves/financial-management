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
import { Typography } from "@mui/material";

import styles from "./Sidebar.module.scss";
import { ISidebarProps } from "@/src/interfaces/components";

const Sidebar: React.FC<ISidebarProps> = ({ children, title }) => {
    return (
        <div className={styles.sidebar}>
            {title && <Typography variant="h6" className={styles.title}>{title}</Typography>}
            {children}
        </div>
    );
};

export default Sidebar;
