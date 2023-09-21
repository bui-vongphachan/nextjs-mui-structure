"use client";

import { styled } from "@mui/system";

export const RejectionAlert = styled("div", {
  shouldForwardProp: (prop) => prop !== "isShow",
})((props: { isShow: boolean }) => ({ theme }) => ({
  display: props.isShow ? "block" : "none",
  border: `2px solid ${theme.color.danger[300]}`,
  borderRadius: "8px",
  margin: theme.spacing(4, 0),
  padding: theme.spacing(4),
}));
