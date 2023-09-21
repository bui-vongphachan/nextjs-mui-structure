"use client";

import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  "& > *": {
    margin: 0,
  },

  "& > h3": {
    ...theme.text.h3,
  },
  "& > h4": {
    ...theme.text.title,
  },
}));
