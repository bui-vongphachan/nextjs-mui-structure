"use client";

import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.color.surface.white,

  boxShadow: theme.shadow[1],
  borderRadius: "12px",

  margin: "4rem auto",
  padding: "2rem 4rem",
  boxSizing: "border-box",
  maxWidth: theme.breakpoints.values.sm + "px",
}));

export const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const Title = styled("h1")(({ theme }) => ({
  ...theme.text.h4,
  color: theme.color.text.dark,
  textAlign: "center",
  margin: "2.5rem 0",
}));

export const CreditBox = styled("div")(({}) => ({
  marginTop: "3rem",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 400,
}));
