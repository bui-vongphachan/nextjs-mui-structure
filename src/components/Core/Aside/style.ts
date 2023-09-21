"use client";

import { styled } from "@mui/system";
import Link from "next/link";

export const AsideContainer = styled("aside", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})((props: { isOpen: boolean }) => ({ theme }) => ({
  maxWidth: "300px",

  display: "flex",
  flexDirection: "column",

  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),

  boxSizing: "border-box",

  backgroundColor: "white",
  boxShadow: theme.shadow[1],

  zIndex: 1,
  position: "relative",

  ...(props.isOpen && {
    width: "100%",

    "& > div > a > div > span": {
      display: "block",
    },
  }),
}));

export const AsideContent = styled("div")(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  paddingTop: theme.spacing(3),
}));

export const AsideMenuItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isActive",
})((props: { isActive: boolean }) => ({ theme }) => ({
  textDecoration: "none",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  height: "50px",
  cursor: "pointer",
  borderRadius: "10px",
  ...theme.text.text,

  color: theme.color.text.base,
  backgroundColor: "transparent",

  "& > div > svg": {
    fill: theme.color.text.base,
  },

  ":hover": {
    color: theme.color.primary[400],

    "& > div > svg": {
      fill: theme.color.primary[400],
    },
  },
}));

export const AsideMenuItemContent = styled("div")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  gap: "12px",

  "& > span": {
    display: "none",
  },
});

export const AsideToggleButton = styled("button")(({ theme }) => ({
  position: "absolute",
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  border: "none", 
  cursor: "pointer",
  right: "-12px",
  transform: "translateY(-50%)",
  top: "20%",
  outline: `1px solid ${theme.color.primary[400]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",

  "& > svg": {
    fill: theme.color.primary[400],
    width: "12px",
    height: "12px",
  }
}));
