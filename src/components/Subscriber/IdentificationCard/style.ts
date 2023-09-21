"use client";

import { styled } from "@mui/system";

export const DataTable = styled("table")(({ theme }) => ({
  width: "100%",

  "& > thead": {
    width: "100%",
  },

  "& > thead > tr > th": {
    textAlign: "left",
    paddingTop: theme.spacing(2),
  },

  "& > tbody > tr > td": {
    position: "relative",
  },

  "& > tbody > tr > td > img": {
    objectFit: "scale-down",
    objectPosition: "left",
  },
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  "& > div": {
    position: "relative",
    width: "100%",
    aspectRatio: "1/1",

    "& > img": {
      objectFit: "contain",
      objectPosition: "top left",
      flexShrink: 0,
    },
  },

  "& > h4": {
    marginBottom: theme.spacing(2),
  },
}));
