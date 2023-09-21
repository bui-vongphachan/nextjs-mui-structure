"use client";

import { styled } from "@mui/system";

export const Text = styled("p")(({ theme }) => ({
  ...theme.text.text,
  margin: 0,
}));

export const TextH4 = styled("h4")(({ theme }) => ({
  ...theme.text.h4,
  margin: 0,
}));

export const LayoutTitle = styled("h3")(({ theme }) => ({
  ...theme.text.h3,
  margin: 0,
}));

export const SectionTitle = styled("h4", {
  shouldForwardProp: (prop) => prop !== "color",
})(
  (props: { color?: "primary" | "danger" | "warning" | "success" }) =>
    ({ theme }) => ({
      ...theme.text.title,
      margin: 0,

      ...(props.color && {
        color: theme.color[props.color][500],
      }),
    })
);

export const SectionSubTitle = styled("h5", {
  shouldForwardProp: (prop) => prop !== "color",
})(
  (props: { color?: "primary" | "danger" | "warning" | "success" }) =>
    ({ theme }) => ({
      ...theme.text.text,
      fontWeight: 700,
      margin: 0,
      ...(props.color && {
        color: theme.color[props.color][500],
      }),
    })
);

export const TextSmaller = styled("h5")(({ theme }) => ({
  ...theme.text.subtitle,
  fontWeight: 400,
  margin: 0,
}));

export const SectionDescription = styled("p")(({ theme }) => ({
  ...theme.text.description,
  margin: 0,
}));

export const SmallText = styled("p")(({ theme }) => ({
  ...theme.text.small,
  margin: 0,
}));
