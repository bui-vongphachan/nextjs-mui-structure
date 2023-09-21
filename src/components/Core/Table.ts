"use client";

import { styled } from "@mui/system";

export const Table = styled("table")(({ theme }) => ({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  fontSize: "14px",

  flex: 1,
  height: "100px",
}));

export const TableHead = styled("thead")(({ theme }) => ({
  display: "table-header-group",
  color: theme.color.primary[100],
  fontWeight: "bold",
  position: "sticky",
  top: 0,
  zIndex: 20,
}));

export const TableBody = styled("tbody")(() => ({
  display: "table-row-group",
  height: "100px",
  overflowY: "auto",
}));

export const TableRow = styled("tr")(() => ({
  display: "table-row",
}));

export const TableHeadCell = styled("th", {
  shouldForwardProp: (prop) => prop !== "divider",
})((props: { divider?: boolean }) => ({ theme }) => ({
  display: "table-cell",
  backgroundColor: "white",
  color: theme.color.text.base,
  fontWeight: "bold",
  textAlign: "left",
  padding: "14px 24px",
  wordBreak: "break-word",
  whiteSpace: "nowrap",

  "&:first-of-type": {
    borderRadius: "12px 0 0 0",
  },

  "&:last-of-type": {
    borderRadius: "0 12px 0 0",
  },

  ...(props.divider && {
    borderRadius: "none",
    height: "1px",
    backgroundColor: theme.color.gray[300],
    padding: 0,
  }),
}));

export const TableCell = styled("td")(({ theme }) => ({
  display: "table-cell",
  verticalAlign: "middle",
  padding: "14px 24px",
  color: theme.color.gray[500],
}));
