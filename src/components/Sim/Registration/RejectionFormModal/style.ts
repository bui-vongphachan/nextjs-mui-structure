"use client";

import { styled } from "@mui/system";
import { Input } from "@/components/Core/Input";

export const FormContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  boxSizing: "border-box",
  height: "100%",
  position: "relative",
}));

export const SimRejectForm = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.sm,
  borderRadius: "12px",
  padding: theme.spacing(6),
  boxSizing: "border-box",

  margin: "auto",

  backgroundColor: theme.color.surface.natural,
}));

export const CheckboxInput = styled(Input)(({ theme }) => ({
  width: "24px",
  height: "24px",
  marginRight: "10px",
}));

export const TextArea = styled("textarea", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})((props: { isOpen: boolean }) => ({ theme }) => ({
  minHeight: "100px",
  display: props.isOpen ? "block" : "none",
  border: "none",
  outline: `2px solid ${theme.color.primary[300]}`,
  padding: theme.spacing(2),
  borderRadius: "8px",
  transition: "all 0.3s ease-in-out",
  ...theme.text.text,
}));
