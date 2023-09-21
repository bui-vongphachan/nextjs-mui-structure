"use client";

import { FixedScreenCardFooter } from "@/components/Core/ResponsiveCard";
import { styled } from "@mui/system";

export const CardFooter = styled(FixedScreenCardFooter)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  justifyContent: "space-between",
}));
