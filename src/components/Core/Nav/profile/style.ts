"use client";

import { Button } from "@/components/Core/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/system";

export const ProfileButton = styled("button")({
  borderRadius: "8px",
  gap: ".5rem",
  padding: "0.5rem",
  border: "none",
  outline: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
});

export const ProfileImageContainer = styled("div")({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  flexShrink: 0,
});

export const StyledMenu = styled(Menu)(({ theme }) => ({}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: "inherit",
}));
