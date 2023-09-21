"use client";

import { Noto_Sans_Lao } from "next/font/google";
import { styled } from "@mui/system";

const NotoSanLao = Noto_Sans_Lao({
  weight: ["400", "500", "600", "700"],
  subsets: ["lao", "latin"],
});

export const Body = styled("body")(({ theme }) => ({
  margin: 0,
  height: "100vh",
  color: theme.color.text.base,
  backgroundColor: theme.color.neutral[100],
  ...NotoSanLao.style,
}));
