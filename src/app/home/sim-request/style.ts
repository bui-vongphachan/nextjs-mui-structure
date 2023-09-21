"use client";

import { FixedScreenCardFooter } from "@/components/Core/ResponsiveCard";
import { styled } from "@mui/system";
import Link from "next/link";

export const CardFooter = styled(FixedScreenCardFooter)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  justifyContent: "space-between",
}));

export const LinkButton = styled(Link)(({ theme }) => ({
  ...theme.text.text,
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },
}));

export const PhoneNumberLink = styled(Link)(({ theme }) => ({
  "&:hover": {
    "& > strong": {
      color: theme.color.primary[500],
    },
  },
}));
