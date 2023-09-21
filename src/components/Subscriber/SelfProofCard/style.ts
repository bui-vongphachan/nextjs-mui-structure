"use client";

import { styled } from "@mui/system";

export const ImageContainer = styled("div")(({ theme }) => ({
  "& > div": {
    width: "100%",
    height: "100%",
    position: "relative",
    aspectRatio: "1 / 1",

    "& > img": {
      objectFit: "contain",
      objectPosition: "top left",
      flexShrink: 0,
    },
  },
}));
