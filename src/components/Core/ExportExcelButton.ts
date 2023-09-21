"use client";
import { styled } from "@mui/system";
import { Button } from "./Button";

export const ExportExcelButton = styled(Button)(({ theme }) => ({
  alignSelf: "end",
  lineHeight: 1.5,
  padding: "8px 16px",
  color: "white",
  backgroundColor: theme.color.success[500],
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),

  "&:hover": {
    backgroundColor: theme.color.success[600],
    color: theme.color.slate[200],

    "& > svg": {
      fill: "white",
    },
  },

  "& > svg": {
    fill: "white",
  },
}));
