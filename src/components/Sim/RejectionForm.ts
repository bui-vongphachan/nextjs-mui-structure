"use client";

import { Button } from "@/components/Core/Button";
import { Input } from "@/components/Core/Input";
import { TextAreaStyle } from "@/styles/textArea";
import { styled } from "@mui/system";

export const SimRejectFormContainer = styled("div")(({ theme }) => ({
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

export const SimRejectFormTitle = styled("h4")(({ theme }) => ({
  ...theme.text.h4,
  textAlign: "center",
  margin: 0,

  "& + div": {
    marginTop: theme.spacing(4),
  },
}));

export const SimRejectFormIcon = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  margin: "auto",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  backgroundColor: "#FEEBDC",
  fill: "#ff6855",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

export const SimRejectFormReasonTitle = styled("h5")(({ theme }) => ({
  ...theme.text.descriptionBold,
  "& + div": {
    marginTop: theme.spacing(4),
  },
}));
export const SimRejectFormRedStar = styled("span")(({ theme }) => ({
  ...theme.text.descriptionBold,
  margin: 0,
  color: "red",
}));

export const SimRejectFormCheckboxFlex = styled("div")(({ theme }) => ({
  display: "flex",
  marginBottom: "15px",
}));

export const SimRejectFormCheckbox = styled(Input)(({ theme }) => ({
  width: "24px",
  height: "24px",
  marginRight: "10px",
}));

export const SimRejectFormTextArea = styled(TextAreaStyle)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const SimRejectFormButton = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginTop: 25,
  "& > button": {
    ...theme.text.subtitle,
    width: "30%",
  },
}));

export const SimRejectFormButtonReject = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF6855",
  "&:hover": {
    backgroundColor: theme.color.danger[600],
  },
}));

export const SimRejectFormButtonCancel = styled(Button)(({ theme }) => ({
  color: "#5B5F64",
  border: `1px solid ${theme.color.surface.border}`,
  "&:hover": {
    backgroundColor: theme.color.gray[200],
  },
}));
