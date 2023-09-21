"use client";

import { Button } from "@/components/Core/Button";
import { styled, Stack, Unstable_Grid } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(4),
  width: "100%",
}));

export const PermissionStack = styled(Unstable_Grid)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.sm,
  display: "flex",
  flexDirection: "column",

  "& > h4": {
    borderBottom: `1px solid ${theme.color.gray[300]}`,
  },

  "& > div": {
    flexGrow: 0,
    overflow: "auto",

    "&::-webkit-scrollbar": {
      width: "8px",
    },

    "&::-webkit-scrollbar-thumb": {
      background: theme.color.gray[300],
      borderRadius: "8px",
    },
  },
}));

export const BioStack = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "max-content",
  maxWidth: theme.breakpoints.values.sm,
  backgroundColor: "white",
  borderRadius: "16px",
  padding: theme.spacing(4, 6),
  boxSizing: "border-box",

  "& > div:first-of-type": {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2),
  },
}));

export const PasswordStack = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: theme.spacing(2),
}));

export const RandomPasswordButton = styled(Button)(({ theme }) => ({
  borderRadius: "50%",
  width: "48px",
  height: "48px",
  flexShrink: 0,
  flexGrow: 0,
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "48px",
}));
