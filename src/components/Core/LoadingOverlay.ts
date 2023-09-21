import { CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

export const LoadingOverlay = styled("div", {
  shouldForwardProp: (prop) => prop !== "isLoading",
})((props: { isLoading: boolean }) => ({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: `rgba(255, 255, 255, 0.7)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  zIndex: 100,

  ...(!props.isLoading && {
    display: "none",
  }),
}));

export const Spinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.color.primary[500],
}));
