"use client";

import { StatusBadge } from "@/components/Core/StatusBadge";
import { SimStatus } from "@/types/sims";
import { styled } from "@mui/system";

export const SimCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "white",
  boxShadow: theme.shadow[1],
  borderRadius: "12px",
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  boxSizing: "content-box",
}));

export const SimCardImage = styled("div")(({ theme }) => ({
  position: "relative",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  overflow: "hidden",
  flexShrink: 0,

  "& > img": {
    objectFit: "scale-down",
    flexShrink: 0,
  },
}));

export const StyledBadge = styled(StatusBadge, {
  shouldForwardProp: (prop) => prop !== "simStatus",
})((props: { simStatus?: SimStatus }) => ({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),

  paddingTop: theme.spacing(0.75),
  paddingBottom: theme.spacing(0.75),
  border: "none",
  backgroundColor: (() => {
    if (props.simStatus === SimStatus.APPROVED) {
      return theme.color.success[400];
    } else if (props.simStatus === SimStatus.REJECTED) {
      return theme.color.danger[400];
    } else if (props.simStatus === SimStatus.INITIATED) {
      return theme.color.warning[400];
    } else {
      return theme.color.gray[400];
    }
  })(),

  color: "white",

  "& > svg": {
    fill: theme.color.text.light,
  },
}));

export const OutlinedBadge = styled(StatusBadge)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.color.text.placeholder,
  border: `2px solid ${theme.color.surface.border}`,
}));
