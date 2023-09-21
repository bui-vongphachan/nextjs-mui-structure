"use client";

import { styled } from "@mui/system";

export const Alert = styled("div", {
  shouldForwardProp: (prop) => prop !== "color",
})(
  (props: { color: "primary" | "gray" | "success" | "danger" | "warning" }) =>
    ({ theme }) => ({
      backgroundColor: theme.color[props.color || "primary"][500],
      color: "white",
      padding: theme.spacing(2, 4),
      borderRadius: theme.spacing(1),
    })
);
