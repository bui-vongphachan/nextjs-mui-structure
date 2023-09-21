"use client";

import { styled } from "@mui/system";

export const Section = styled("section")(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,

  "& > div": {
    padding: theme.spacing(4),
    backgroundColor: "white",
    borderRadius: "16px",
  },
}));

export const Table = styled("table")(({ theme }) => ({
  width: "100%",

  "& > thead": {
    width: "100%",
  },

  "& > thead > tr > th": {
    textAlign: "left",
    paddingTop: theme.spacing(3),
  },
}));
