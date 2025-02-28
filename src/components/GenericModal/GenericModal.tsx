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
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

import { IGenericModalProps } from "@/src/interfaces/components";

const GenericModal: React.FC<IGenericModalProps> = ({
    open,
    handleClose,
    title,
    children,
    illustration,
    buttonText,
    onSubmit,
    isFormValid,
    buttonColor = "#47A138",
}) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        width: "90%",
                        maxWidth: 400,
                        maxHeight: ["90vh", "auto"],
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        overflowY: ["auto"],
                        position: "relative",
                    }}
                >
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Image
                        src={illustration}
                        alt="Modal Illustration"
                        width={400}
                        height={200}
                        style={{ marginBottom: "16px", maxWidth: "100%" }}
                    />
                    <Typography variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={onSubmit}
                        sx={{ mt: 2, width: "100%" }}
                    >
                        {children}
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            sx={{
                                mt: 2,
                                backgroundColor: buttonColor,
                                "&:hover": {
                                    backgroundColor: `${buttonColor}CC`,
                                },
                            }}
                            disabled={!isFormValid}
                            
                        >
                            {buttonText}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default GenericModal;
