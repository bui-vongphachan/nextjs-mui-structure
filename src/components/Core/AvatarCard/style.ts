"use client";

import styled from "@mui/system/styled";

export const ImageContainer = styled("div")(({ theme }) => ({
  flexShrink: 0,
  borderRadius: "50%",
  overflow: "hidden",
  position: "relative",
  width: "160px",
  height: "160px",
  border: `1px solid ${theme.color.surface.border}`,
}));
