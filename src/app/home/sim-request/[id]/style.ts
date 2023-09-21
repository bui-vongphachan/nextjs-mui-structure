"use client";

import { styled } from "@mui/system";

export const Dialog = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})((props: { isOpen: boolean }) => ({ theme }) => ({
  display: props.isOpen ? "flex" : "none",
  position: "fixed",
  zIndex: 100,
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

export const Form = styled("form")(({ theme }) => ({
  maxWidth: "480px",
  width: "100%",
  backgroundColor: "white",
  height: "max-content",
  margin: "6rem auto",
  borderRadius: "8px",
  padding: theme.spacing(4),
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(8),
}));

export const Alert = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),

  "& > div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: theme.color.danger[100],
    padding: theme.spacing(4),

    "& > svg": {
      width: "50px",
      height: "50px",
      fill: theme.color.danger[500],
    },
  },
}));

export const Actions = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  justifyContent: "flex-end",
  gap: theme.spacing(4),
}));
