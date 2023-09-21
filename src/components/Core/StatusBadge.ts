"use client";

import { styled } from "@mui/system";

export const StatusBadge = styled("div", {
  shouldForwardProp: (prop) => prop !== "isActive",
})((props: { isActive: boolean }) => ({ theme }) => ({
  padding: theme.spacing(0.5, 1),

  width: "max-content",
  borderRadius: "6px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: `1px solid ${
    props.isActive ? theme.color.success[500] : theme.color.danger[500]
  }`,
  color: props.isActive ? theme.color.success[500] : theme.color.danger[500],

  ...theme.text.small,
}));
