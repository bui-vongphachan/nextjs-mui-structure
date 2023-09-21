"use client";

import { Input } from "@/components/Core/Input";
import { styled } from "@mui/system";

export const Form = styled("form", {
  shouldForwardProp: (prop) => prop !== "button",
})((props: { button?: boolean }) => ({ theme }) => ({
  ...(props.button && {
    display: "flex",
    alignItems: "center",

    "& > div > input": {
      borderRadius: "8px 0px 0px 8px",
    },

    "& > button": {
      borderRadius: "0 8px 8px 0",
      outline: `1px solid ${theme.color.primary[500]}`,
    },
  }),
}));

export const PaginationSearchInput = styled(Input)(({ theme }) => ({
  paddingTop: "12px",
  paddingBottom: "12px",
  paddingLeft: "44px",
  paddingRight: "12px",
  width: "max-content",
}));

export const SearchFormContainer = styled("div")(({ theme }) => ({
  position: "relative",
  "& > svg": {
    width: "24px",
    height: "24px",
    fill: theme.color.gray[300],
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
  },
}));
