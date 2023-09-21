"use client";

import { styled } from "@mui/system";

export const FixedSscreenTopActions = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const FixedScreenCard = styled("div", {
  shouldForwardProp: (prop) => prop !== "fixedHeight" && prop !== "color",
})(({ theme }) => (props: { fixedHeight?: boolean }) => ({
  padding: theme.spacing(4, 6),

  ...(props.fixedHeight && {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  }),
}));

export const FixedScreenCardHeader = styled("div")(({ theme }) => ({
  padding: theme.spacing(4, 4, 2, 4),
  backgroundColor: theme.color.surface.white,
  borderRadius: "12px 12px 0 0",
  boxShadow: theme.shadow[1],
}));

export const FixedScreenCardBody = styled("div", {
  shouldForwardProp: (prop) => prop !== "scrollable" && prop !== "body",
})(({ theme }) => (props: { scrollable?: boolean; body?: boolean }) => ({
  padding: theme.spacing(5),
  zIndex: 1,

  ...(props.body && {
    padding: theme.spacing(0, 4),
  }),

  ...(props.scrollable && {
    flex: 1,
    overflowY: "auto",
    position: "relative",
    backgroundColor: theme.color.surface.white,

    "&::-webkit-scrollbar": {
      width: "8px",
      padding: theme.spacing(2),
    },

    "&::-webkit-scrollbar-thumb": {
      background: theme.color.primary[300],
      borderRadius: "8px",
      padding: theme.spacing(2),
    },
  }),
}));

export const FixedScreenCardFooter = styled("div", {
  shouldForwardProp: (prop) => prop !== "topBorder",
})((props: { topBorder?: boolean }) => ({ theme }) => ({
  padding: theme.spacing(2, 4),
  backgroundColor: theme.color.surface.white,
  boxShadow: theme.shadow[1],
  borderRadius: "0 0 12px 12px",

  ...(props.topBorder && {
    borderTop: `1px solid ${theme.color.gray[300]}`,
  }),
}));
