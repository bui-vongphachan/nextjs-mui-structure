"use client";

import { styled } from "@mui/system";

export const Nav = styled("nav")(({ theme }) => ({
  padding: theme.spacing(0, 4),
  backgroundColor: "white",
  boxShadow: theme.shadow[1],
  zIndex: 1,
}));
