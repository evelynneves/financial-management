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
