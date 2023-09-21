"use client";

import { styled } from "@mui/system";

export const CarouselContainer = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",

  "& > button": {
    position: "absolute",
    zIndex: 1,
    border: "none",
    outline: "none",
    width: "100px",
    height: "100%",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: "rgba(0, 0, 0, 0.2)",

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },

    "& > div > svg": {
      width: "50px",
      height: "50px",
      fill: "rgba(255, 255, 255, 0.5)",
    },
  },

  "& > button:first-of-type": {
    left: 0,
  },

  "& > button:last-of-type": {
    right: 0,
  },

  "& > div": {
    display: "flex",
    width: "100%",
    height: "100%",
  },
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  flexShrink: 0,
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  display: "flex",

  "& > img": {
    width: "100%",
    height: "100%",
    flex: 1,
    objectFit: "contain",
  },
}));
