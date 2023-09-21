"use client";

import { styled } from "@mui/system";
import NextLink from "next/link";

export const StyledLink = styled(NextLink)(({ theme }) => ({
  textDecoration: "none",
  fontWeight: 700,
  transition: "color 0.2s ease-in-out",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  color: theme.color.gray[500],

  "& > img": {
    borderRadius: "50%",
    transition: "all 0.2s ease-in-out",
  },

  ":hover": {
    color: theme.color.primary[500],
    "& > img": {
      filter: "brightness(0.8)",
      flexShrink: 0,
    },
  },
}));
