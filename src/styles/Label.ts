"use client";

import { styled } from "@mui/system";

export const Label = styled("label")(({ theme }) => ({
  ...theme.palette.text,
  fontSize: "1rem",
  fontWeight: "bold",
  height: "auto",
  "& .MuiChip-label": {
    display: "block",
    whiteSpace: "normal",
  },
  padding: "0.5rem",
}));
