"use client";

import { styled } from "@mui/system";

export const DateRange = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "1px solid #ccc",
  padding: "0px",
  borderRadius: "8px",
  marginLeft: "10px",
  paddingRight: "10px",
  cursor: "pointer",
  color: theme.color.gray[400],
}));

export const DateRangeInput = styled("input")(({ theme }) => ({
  width: "230px",
  height: "41px",
  border: "none",
  justifyContent: "center",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: "transparent",
  color: theme.color.gray[400],
  ...theme.text.text,
  // hide icon date and after click on input date to open calendar
  "&::-webkit-calendar-picker-indicator": {
    display: "none",
  },

  // hide hover border
  "&:hover": {
    border: "none",
  },
  // hide cursor
  "&:focus": {
    outline: "none",
    border: "none",
  },
}));
