"use client";

import { styled } from "@mui/system";

export const Table = styled("table")(({ theme }) => ({
  width: "80%",

  "& > thead > tr > th": {
    textAlign: "left",
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },

  "& > thead > tr > th:first-of-type": {
    paddingLeft: 0,
  },

  "& > tbody > tr > td": {
    textAlign: "left",
    paddingLeft: theme.spacing(4),
  },

  "& > tbody > tr > td:first-of-type": {
    textAlign: "left",
    paddingLeft: 0,
  },
}));
