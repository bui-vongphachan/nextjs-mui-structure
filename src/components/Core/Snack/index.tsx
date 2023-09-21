"use client";

import { IconButton, Snackbar } from "@mui/material";
import { createContext, useCallback, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Alert } from "../Alert";

export interface SnackbarProps {
  message: string;
  color: "primary" | "gray" | "success" | "danger" | "warning";
}
interface SnackbarContext {
  openSnackbar: (props: SnackbarProps) => void;
}

export const CustomSnackbarContext = createContext<SnackbarContext>({
  openSnackbar: () => {},
});

const CustomSnackbarProvider = (props: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState<
    "primary" | "gray" | "success" | "danger" | "warning"
  >("success");

  const openSnackbar = useCallback((props: SnackbarProps) => {
    setOpen(true);
    setMessage(props.message);
    setColor(props.color);
  }, []);

  const handleClose = useCallback(
    (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") return;
      else setOpen(false);
    },
    []
  );

  return (
    <CustomSnackbarContext.Provider value={{ openSnackbar }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          color={color}
          sx={(theme) => ({ minWidth: "300px", boxShadow: theme.shadow[1] })}
        >
          {message}
        </Alert>
      </Snackbar>
      {props.children}
    </CustomSnackbarContext.Provider>
  );
};

export default CustomSnackbarProvider;
