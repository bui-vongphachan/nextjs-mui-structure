"use client";

import { styled } from "@mui/system";

export const ProvinceForm = styled("form")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const ProvinceSelect = styled("select")(({ theme }) => ({
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  border: `1px solid ${theme.color.surface.border}`,
  outline: "none",
  height: "44.5px",
  color: theme.color.gray[400],
  ...theme.text.subtitle,

  "& > option": {
    color: theme.color.text.base,
  },

  "-webkit-appearance": "none",
  "-moz-appearance": "none",
}));

export const ProvinceSelectOption = styled("option")(({ theme }) => ({}));
