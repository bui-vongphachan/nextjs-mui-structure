"use client";

import { styled } from "@mui/system";

export const ImageContainer = styled("div")(({ theme }) => ({
  flexShrink: 0,
  borderRadius: "50%",
  overflow: "hidden",
  position: "relative",
  width: "128px",
  height: "128px",
  boxShadow: theme.shadow[1],
}));
