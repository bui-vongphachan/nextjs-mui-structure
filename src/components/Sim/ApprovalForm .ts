"use client";

import { Button } from "@/components/Core/Button";
import { styled } from "@mui/system";

export const SimApproveFormContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(20),
  boxSizing: "border-box",
  height: "100%",
  position: "relative",
}));

export const SimApproveForm = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.sm,
  borderRadius: "12px",
  padding: theme.spacing(6),
  boxSizing: "border-box",

  margin: "auto",

  backgroundColor: theme.color.surface.natural,
}));

export const SimApproveFormTitle = styled("h4")(({ theme }) => ({
  ...theme.text.h4,
  textAlign: "center",
  margin: 0,

  "& + div": {
    marginTop: theme.spacing(4),
  },
}));
export const SimApproveFormIcon = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  margin: "auto",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  backgroundColor: theme.color.primary[500],
  fill: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

export const SimApproveFormButton = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginTop: 25,
  "& > button": {
    ...theme.text.subtitle,
    width: "30%",
  },
}));

export const SimApproveFormButtonApprove = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF6855",
  "&:hover": {
    backgroundColor: theme.color.danger[600],
  },
}));

export const SimApproveFormButtonCancel = styled(Button)(({ theme }) => ({
  color: "#5B5F64",
  border: `1px solid ${theme.color.surface.border}`,
  "&:hover": {
    backgroundColor: theme.color.gray[200],
  },
}));
