"use client";

import { styled } from "@mui/system";
import Link from "next/link";

export const PaginationButton = styled(Link, {
  shouldForwardProp: (prop) =>
    prop !== "active" && prop !== "hide" && prop !== "disabled",
})(
  (props: { active?: boolean; hide?: boolean; disabled?: boolean }) =>
    ({ theme }) => ({
      display: props.hide ? "none" : "flex",
      alignItems: "center",
      justifyContent: "center",

      padding: "0.5rem 1rem",
      transition: "all 0.3s ease-in-out",
      borderRadius: "0.25rem",

      ...theme.text.subtitle,
      textDecoration: "none",

      cursor: props.disabled || props.active ? "not-allowed" : "pointer",
      ...((props.disabled || props.active) && { pointerEvents: "none" }),

      border: (() => {
        if (props.disabled) return `1px solid ${theme.color.surface.disabled}`;
        if (props.active) return `1px solid ${theme.color.primary[500]}`;
        return `1px solid ${theme.color.surface.border}`;
      })(),

      color: (() => {
        if (props.disabled) return theme.color.text.placeholder;
        if (props.active) return theme.color.text.light;
        return theme.color.text.base;
      })(),

      backgroundColor: (() => {
        if (props.disabled) return theme.color.surface.disabled;
        if (props.active) return theme.color.primary[500];
        return theme.color.surface.natural;
      })(),

      ":hover": {
        color: (() => {
          if (props.disabled) return "none";
          if (props.active) return "white";
          return theme.color.primary[500];
        })(),
        backgroundColor: (() => {
          if (props.disabled) return theme.color.gray[300];
          if (props.active) return "none";
          return theme.color.gray[100];
        })(),
        border: (() => {
          if (props.disabled)
            return `1px solid ${theme.color.surface.disabled}`;
          return `1px solid ${theme.color.primary[500]}`;
        })(),
      },
    })
);

export const LimitForm = styled("form")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const LimitDescription = styled("p")(({ theme }) => ({
  margin: 0,
  color: theme.color.text.base,
}));

export const LimitSelect = styled("select")(({ theme }) => ({
  padding: "0.5rem 1rem",
  borderRadius: "0.25rem",
  border: `1px solid ${theme.color.surface.border}`,
  outline: "none",
  color: theme.color.text.base,
  ...theme.text.subtitle,

  "& > option": {
    color: theme.color.text.base,
  },
}));

export const LimitSelectOption = styled("option")(({ theme }) => ({}));
