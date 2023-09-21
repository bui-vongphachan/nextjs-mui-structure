"use client";

import { styled } from "@mui/system";

export const SubscriberInfoStack = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",

  "& > h4": {
    marginBottom: theme.spacing(2),
  },
}));

export const SubscriberIdentificationImageCard = styled(SubscriberInfoStack)(
  ({ theme }) => ({
    aspectRatio: "1/1",
  })
);
