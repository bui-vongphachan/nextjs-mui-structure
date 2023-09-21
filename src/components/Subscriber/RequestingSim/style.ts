"use client";

import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  borderRadius: theme.spacing(1),
  outline: `2px solid ${theme.color.gray[100]}`,
  padding: theme.spacing(2, 4),
  gap: theme.spacing(4),
  alignItems: "center",
  flexWrap: "wrap",

  "& > div:first-of-type": {
    borderRadius: "50%",
    width: "88px",
    height: "88px",
    position: "relative",
    overflow: "hidden",

    "& > img": {
      objectFit: "cover",
      flexShrink: 0,
    },
  },

  "& > div:last-of-type": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(1),

    "& > div": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
      flexWrap: "wrap",
    },
  },
}));

export const Status = styled("div", {
  shouldForwardProp: (prop) => prop !== "color",
})(
  (props: { color: "success" | "warning" | "danger" | "info" | "primary" }) =>
    ({ theme }) => ({
      height: "fit-content",
      padding: theme.spacing(0.5, 2),
      borderRadius: "8px",
      color: theme.color[props.color][500],
      border: `1px solid ${theme.color[props.color][500]}`,
      ...theme.text.small,
    })
);
