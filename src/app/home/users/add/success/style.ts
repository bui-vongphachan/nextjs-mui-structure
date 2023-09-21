"use client";

import { Button } from "@/components/Core/Button";
import { styled } from "@mui/system";

export const NoticeMessage = styled("h1")(({ theme }) => ({
  color: theme.color.gray[500],
  textAlign: "center",
}));

export const AddAnotherUserButton = styled(Button)(({ theme }) => ({}));

export const BackToHomeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.color.primary[500],

  "& > svg": {
    fill: theme.color.primary[500],
  },

  ":hover": {
    backgroundColor: theme.color.primary[200],
  },
}));

export const ImagePreview = styled("div")(({ theme }) => ({
  aspectRatio: "1/1",
  width: "120px",
  height: "120px",
  position: "relative",
  borderRadius: "50%",
  overflow: "hidden",
}));

export const OfficerName = styled("h2")(({ theme }) => ({
  color: theme.color.primary[500],
  textAlign: "center",

  fontSize: "1.5rem",
  fontWeight: "bold",
  lineHeight: "2rem",
}));

export const TogglePasswordButton = styled(Button)(({ theme }) => ({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  backgroundColor: "transparent",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    backgroundColor: theme.color.gray[300],
  },

  "& > svg": {
    flexShrink: 0,
  },
}));
