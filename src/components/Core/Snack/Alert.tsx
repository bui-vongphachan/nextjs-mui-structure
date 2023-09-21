"use client";

import { useContext, useEffect } from "react";
import { CustomSnackbarContext, SnackbarProps } from ".";

const SnackbarAlert = (props: SnackbarProps) => {
  const { openSnackbar } = useContext(CustomSnackbarContext);

  useEffect(() => {
    if (props.message) openSnackbar(props);
  }, [openSnackbar, props]);

  return <div />;
};

export default SnackbarAlert;
