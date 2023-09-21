"use client";

import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

export const SecondaryInfoCardItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),

  "& > svg": {
    fill: theme.color.primary[400],
  },

  "& > div": {
    display: "flex",
    flexDirection: "column",
  },
}));

export const MainContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "inherit",
}));

export const MainContentContainer = styled("main")({
  flexGrow: 0,
  flex: 1,
  overflowY: "auto",
  display: "flex",
  backgroundColor: "transparent",
});

export const Main = styled("section")({
  flex: 1,
  backgroundColor: "transparent",
  overflowY: "auto",
});

export const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  height: "inherit",
  padding: "1rem",
  gap: "1rem",
  backgroundColor: "transparent",
}));

export const ContainerTitle = styled("div")(() => ({
  display: "flex",
  fontSize: "1.2rem",
  fontWeight: "bold",
}));

export const FlexRow = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  borderRadius: "0.5rem",
  backgroundColor: "white",
  height: "200px",
  boxShadow: "0 0 0.1rem rgba(0, 0, 0, 0.2)",
  alignItems: "center",
}));

export const Box = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  padding: "1rem",
  paddingTop: "4rem",
  borderRadius: "0.5rem",
  width: "100%",
  height: "100%",
}));

export const BoxDivider = styled("div")(() => ({
  backgroundColor: "#D6D7D8",
  borderRadius: "0.5rem",
  width: "5px",
  height: "159px",
}));

export const Label = styled("div")(() => ({}));

export const BlodLabel = styled("div")(() => ({
  fontSize: "1.1rem",
  fontWeight: "bold",
}));

export const BigLabel = styled("div")(() => ({
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#65C9FB",
}));

export const FlexBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
}));

export const Card = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  padding: "2rem",
  borderRadius: "0.5rem",
  backgroundColor: "white",
  boxShadow: "0 0 0.1rem rgba(0, 0, 0, 0.2)",
  width: "100%",
  height: "100%",
  minHeight: "280px",
}));

export const FlexItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
}));

export const InfoCard = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  border: `0px solid ${theme.color.gray[300]}`,
  borderRadius: "12px",
  boxShadow: "0px 4px 250px 0px rgba(217, 217, 217, 0.64)",
  padding: theme.spacing(2),
}));

export const InfoCardItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),

  "& > h3": {
    color: theme.color.primary[500],
  },
}));

export const SecondaryInfoCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  backgroundColor: "white",
  height: "100%",
  borderRadius: "8px",
  padding: theme.spacing(4),
}));

// Dashboard
export const SecondaryGrid = styled(Grid)(({ theme }) => ({
  margin: "0px !important",

  "& > div": {
    backgroundColor: "white",

    "&:first-of-type": {
      marginLeft: theme.spacing(-4),
      boxSize: "border-box",
    },
  },
}));
