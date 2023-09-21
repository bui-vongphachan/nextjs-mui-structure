"use client";

import { Button } from "@/components/Core/Button";
import { styled } from "@mui/system";

export const SimActivationFormContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(20),
  boxSizing: "border-box",
  height: "100%",
  position: "relative",
}));

export const SimActivationForm = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.sm,
  borderRadius: "12px",
  padding: theme.spacing(6),
  boxSizing: "border-box",
  margin: "auto",
  backgroundColor: theme.color.surface.natural,
}));

export const SimActivationFormTitle = styled("h4")(({ theme }) => ({
  ...theme.text.h4,
  textAlign: "center",
  margin: 0,

  "& + div": {
    marginTop: theme.spacing(4),
  },
}));
export const SimActivationFormIcon = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  margin: "auto",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  backgroundColor: "#FEEBDC",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

export const SimActivationFormButton = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginTop: 25,
  "& > button": {
    ...theme.text.subtitle,
    width: "30%",
  },
}));

export const SimActivationFormButtonActivation = styled(Button)(
  ({ theme }) => ({
    backgroundColor: "#FF6855",
    "&:hover": {
      backgroundColor: theme.color.danger[600],
    },
  })
);

export const SimActivationFormButtonCancel = styled(Button)(({ theme }) => ({
  color: "#5B5F64",
  border: `1px solid ${theme.color.surface.border}`,
  "&:hover": {
    backgroundColor: theme.color.gray[200],
  },
}));
