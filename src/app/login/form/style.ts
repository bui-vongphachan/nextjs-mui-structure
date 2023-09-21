"use client";

import { Button } from "@/components/Core/Button";
import { Input } from "@/components/Core/Input";
import { styled } from "@mui/system";
import Link from "next/link";

export const Container = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  overflowX: "hidden",
}));

const Form = styled("div", {
  shouldForwardProp: (prop) => prop !== "isValid",
})((props: { isValid?: boolean }) => ({}) => ({
  padding: "0 1rem",
  boxSizing: "border-box",

  width: "100%",

  flexShrink: 0,

  transition: "transform 0.5s ease-in-out",
  ...(props.isValid && {
    transform: "translateX(-100%)",
    "& + div": {
      transform: "translateX(-100%)",
    },
  }),
}));

export const UsernameFormContainer = styled(Form)(({ theme }) => ({}));

export const PasswordFormContainer = styled(Form)(({ theme }) => ({}));

export const ConfirmButton = styled(Button)(({ theme }) => ({
  ...theme.text.subtitle,
  width: "100%",
  marginTop: "2rem",

  cursor: "pointer",

  backgroundColor: theme.color.primary[500],
  color: theme.color.text.light,

  transition: "background-color 0.2s ease-in-out",

  ":hover": {
    backgroundColor: theme.color.primary[600],
    color: theme.color.text.light,
  },

  ":disabled": {
    color: theme.color.surface.border,
    backgroundColor: theme.color.surface.disabled,
    cursor: "not-allowed",
  },
}));

export const HelperTextBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "isActive",
})((props: { isActive?: boolean }) => ({ theme }) => ({
  display: props.isActive ? "block" : "none",

  padding: ".75rem",
  margin: "1rem 0",

  color: "red",
  backgroundColor: theme.color.gray[100],

  fontSize: "16px",
  fontWeight: 400,
}));

export const FormGroup = styled("div")(({}) => ({}));

export const PasswordInputContainer = styled("div")(({ theme }) => ({
  position: "relative",
  marginTop: "2rem",
}));

export const PasswordReavelButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isReavel",
})((props: { isReavel?: boolean }) => ({ theme }) => ({
  position: "absolute",

  top: "50%",
  right: "1rem",
  transform: "translateY(-50%)",

  padding: 0,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "50%",

  width: "32px",
  height: "32px",

  backgroundColor: "transparent",

  ":hover": {
    backgroundColor: "transparent",
  },

  "& > svg": {
    fill: theme.color.text.base,
  },

  "&:hover > svg": {
    fill: theme.color.text.dark,
  },

  "& > svg:first-of-type": {
    display: props.isReavel ? "none" : "block",
  },

  "& > svg:last-of-type": {
    display: props.isReavel ? "block" : "none",
  },
}));

export const PasswordInput = styled(Input)(({}) => ({
  paddingRight: "4rem",
}));

export const ForgotPasswordButton = styled(Link)(({ theme }) => ({
  marginTop: "1rem",
  color: theme.color.primary[600],
}));
