"use client";

import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex", 
  borderRadius: theme.spacing(1),
  outline: `2px solid ${theme.color.gray[100]}`,
  padding: theme.spacing(2, 4),
  gap: theme.spacing(4),
  alignItems: "center",
  flexWrap: "wrap",

  "& > div:first-of-type": {
    borderRadius: "50%",
    width: "88px",
    height: "88px",
    position: "relative",
    overflow: "hidden",
    flexShrink: 0,

    "& > img": {
      objectFit: "cover",
      flexShrink: 0,
    },
  },
}));
