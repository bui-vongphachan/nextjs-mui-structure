"use client";

import { styled } from "@mui/system";

export const ImageInputButton = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  borderRadius: "50%",
  margin: "auto",
  width: "120px",
  height: "120px",
  backgroundColor: theme.color.gray[100],
  transition: "all 0.2s ease-in-out",
  border: `2px solid ${theme.color.surface.border}`,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.color.primary[500],

  ":hover": {
    backgroundColor: theme.color.gray[200],

    "& > img": {
      transition: "all 0.2s ease-in-out",
      filter: "brightness(0.5)",
      flexShrink: 0,
    },

    "& > p": {
      zIndex: 1,
      color: theme.color.gray[500],
      textShadow: theme.shadow[1],
    },
  },
}));

export const ImageInputPlaceholder = styled("p")(({ theme }) => ({
  ...theme.text.subtitle,
  margin: 0,
  ":hover": {
    pointerEvents: "none",
  },
}));

export const ImagePreviewer = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  transition: "all 0.2s ease-in-out",
  position: "absolute",
}));
