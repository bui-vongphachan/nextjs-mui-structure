"use client";

import { styled } from "@mui/system";
export const TextAreaStyle = styled("textarea")(({ theme }) => ({
    border: `1px solid ${theme.color.surface.border}`,
    width: "100%",
    flexGrow: 1,
    boxSizing: "border-box",
    padding: "16px 14px",
    borderRadius: 12,
    ...theme.text.text,
    color: theme.color.text.base,
    "::placeholder": {
        color: theme.color.text.placeholder,
      },
    resize: "none",
    "&:focus": {
        outline: `1px solid ${theme.color.primary[700]}`,
    },
    "&:hover": {
        border: `1px solid ${theme.color.primary[500]}`,
    }
  }));