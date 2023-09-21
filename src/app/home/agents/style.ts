"use client";

import { FixedScreenCardFooter } from "@/components/Core/ResponsiveCard";
import { styled } from "@mui/system";

export const SelectOption = styled("option")(({ theme }) => ({}));

export const Select = styled("select")(({ theme }) => ({
  padding: "0.5rem 1rem",
  borderRadius: "0.25rem",
  border: `1px solid ${theme.color.surface.border}`,
  outline: "none",
  color: theme.color.text.base,
  marginLeft: 20,
  ...theme.text.subtitle,
  width: "150px",

  "& > option": {
    color: theme.color.text.base,
  },
}));

export const HeaderActions = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),

  "& > a": {
    textDecoration: "none",
  },
}));

export const CardFooter = styled(FixedScreenCardFooter)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  justifyContent: "space-between",
}));
