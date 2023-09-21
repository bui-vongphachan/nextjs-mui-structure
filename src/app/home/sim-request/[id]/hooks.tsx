"use client";

import { CustomSnackbarContext } from "@/components/Core/Snack";
import { API_UPDATE_SIM_REQUEST } from "@/constrains/api";
import { ApiResponse } from "@/types/api";
import { SimDetail } from "@/types/sims";
import { getClientRequestHeaders } from "@/utils/csrOnly/getClientRequestHeaders";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { useRouter } from "next/navigation";
import { useState, useCallback, FormEvent, useContext } from "react";

const useActivationSimCardToggler = (props: {
  simRequest: SimDetail;
  toggleActivationModal: () => void;
}) => {
  const { openSnackbar } = useContext(CustomSnackbarContext);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const doAction = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsLoading(true);

      const URL =
        process.env.NEXT_PUBLIC_BACKEND_HOST +
        injectIdToPagePath(API_UPDATE_SIM_REQUEST, `${props.simRequest._id}`);

      const body = JSON.stringify({
        isActive: props.simRequest.isActive ? false : true,
      });

      const response = await fetch(URL, {
        method: "PATCH",
        headers: getClientRequestHeaders(),
        body,
      });

      const { success, message } = (await response.json()) as ApiResponse<any>;

      openSnackbar({
        message,
        color: success ? "success" : "danger",
      });

      if (success) props.toggleActivationModal();

      setIsLoading(false);

      return router.refresh();
    },
    [router, openSnackbar, props]
  );

  return { isLoading, doAction };
};

export default useActivationSimCardToggler;
