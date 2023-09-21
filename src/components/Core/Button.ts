"use client";

import { styled } from "@mui/system";

export const Button = styled("button", {
  shouldForwardProp: (prop) =>
    prop !== "variant" && prop !== "color" && prop !== "icon",
})(
  (props: {
      icon?: boolean;
      variant?: "contained" | "outlined" | "text";
      color?: "primary" | "danger" | "warning" | "success" | "info" | "gray";
      scale?: "small" | "medium" | "large";
    }) =>
    ({ theme }) => ({
      ...theme.text.subtitle,

      width: "fit-content",
      minWidth: "80px",
      height: "fit-content",

      padding: "12px 16px",
      cursor: "pointer",

      border: "none",
      outline: "none",
      borderRadius: "8px",

      backgroundColor: "transparent",

      ":disabled": {
        cursor: "not-allowed",
      },

      ...(props.icon && {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
      }),

      ...(props.scale === "small" && {
        padding: "8px 16px",
      }),

      "&:hover": {
        backgroundColor: theme.color[props.color || "primary"][200],
        color: theme.color.gray[500],
        "& > svg": {
          fill: theme.color.gray[500],
        },
      },

      "& > svg": {
        fill: theme.color.text.base,
        width: props.scale === "small" ? "16px" : "24px",
        height: props.scale === "small" ? "16px" : "24px",
      },

      ...(props.variant === "contained" && {
        backgroundColor: theme.color[props.color || "primary"][500],
        color: theme.color.text.light,

        "& > svg": {
          width: props.scale === "small" ? "24px" : "24px",
          height: props.scale === "small" ? "24px" : "24px",
          fill: theme.color.text.light,
        },

        "&:hover": {
          backgroundColor: theme.color[props.color || "primary"][600],
        },
      }),

      ...(props.variant === "outlined" && {
        backgroundColor: "transparent",
        outline: `1px solid ${theme.color[props.color || "primary"][500]}`,
        color: theme.color[props.color || "primary"][500],

        "& > svg": {
          width: props.scale === "small" ? "24px" : "24px",
          height: props.scale === "small" ? "24px" : "24px",
          fill: theme.color[props.color || "primary"][500],
        },

        "&:hover": {
          backgroundColor: theme.color[props.color || "primary"][50],
        },
      }),
    })
);
