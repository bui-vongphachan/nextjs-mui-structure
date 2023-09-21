"use client";

import { styled } from "@mui/system";

export const ImageContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",

  display: "flex",
  flexWrap: "wrap",
  
  "& > div": {
    position: "relative",
    width: "100%",
    height: "100%",
    aspectRatio: "1/1",

    "& > img": {
      objectFit: "contain",
      objectPosition: "top left",
      flexShrink: 0,
    },
  },
}));
