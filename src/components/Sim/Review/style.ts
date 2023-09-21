"use client";

import { styled } from "@mui/system";

export const Dialog = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})((props: { isOpen: boolean }) => ({ theme }) => ({
  display: props.isOpen ? "flex" : "none",
  position: "fixed",
  zIndex: 100,
  inset: 0,

  "& > div:first-of-type": {
    flex: 1,
    backgroundColor: "black",
  },

  "& > div:last-of-type": {
    width: "700px",
    backgroundColor: "white",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    position: "relative",
    paddingBottom: theme.spacing(4),
  },
}));

export const DialogActionBar = styled("div")(({ theme }) => ({
  zIndex: 1,
  backgroundColor: "white",
  width: "100%",
  borderBottom: `1px solid ${theme.palette.divider}`,
  right: 0,
  top: 0,
  padding: "1rem",
  position: "sticky",
  display: "flex",
  justifyContent: "flex-end",
  gap: "1rem",
  boxSizing: "border-box",
}));

export const CloseButton = styled("button")(({ theme }) => ({
  position: "absolute",
  border: "none",
  cursor: "pointer",
  borderRadius: "50%",
  flexShrink: 0,
  flexGrow: 0,
  width: "48px",
  height: "48px",
  zIndex: 2,
  left: theme.spacing(3),
  top: theme.spacing(2),
  backgroundColor: "rgba(0, 0, 0, 0.2)",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  "& > svg": {
    width: "34px",
    height: "34px",
    fill: "white",
  },
}));

export const IdentificationContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 4),
}));

export const SelfProofContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 4),

  "& > h4": {
    marginBottom: "1rem",
  },
}));
