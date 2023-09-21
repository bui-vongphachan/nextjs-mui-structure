"use client";

import { styled } from "@mui/system";

export const Input = styled("input", {
  shouldForwardProp: (prop) => prop !== "scale",
})((props: { scale?: "small" | "medium" | "large" }) => ({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  padding: "16px 14px",
  borderRadius: "8px",

  ...(props.scale === "small" && {
    padding: "8px 12px",
    fontSize: "14px",
  }),

  border: `1px solid ${theme.color.surface.border}`,
  backgroundColor: "transparent",
  ...theme.text.text,
  color: theme.color.text.base,

  "::placeholder": {
    color: theme.color.text.placeholder,
  },
  ":hover": {
    border: `1px solid ${theme.color.primary[500]}`,
  },
  ":focus-visible": {
    outline: `1px solid ${theme.color.primary[500]}`,
  },

  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: theme.color.gray[200],
    color: theme.color.gray[400],
  },
}));
