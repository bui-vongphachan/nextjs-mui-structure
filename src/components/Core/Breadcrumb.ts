"use client";

import { styled } from "@mui/system";
import Link from "next/link";

export const BreadcrumbStack = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  color: theme.color.slate[500],
}));

export const BreadcrumbLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "disabled",
})((props: { disabled?: boolean }) => ({ theme }) => ({
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  color: theme.color.gray[400],

  ":hover": {
    color: theme.color.primary[500],
  },

  ...(props.disabled && {
    color: theme.color.gray[700],
    pointerEvents: "none",
  }),
}));
