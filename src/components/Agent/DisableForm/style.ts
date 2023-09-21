"use client";

import { styled } from "@mui/system";

export const Form = styled("form")(({ theme }) => ({
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
  borderRadius: "8px",
  padding: theme.spacing(3, 3),

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  textAlign: "center",

  "& > div": {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(2),
  },
}));
