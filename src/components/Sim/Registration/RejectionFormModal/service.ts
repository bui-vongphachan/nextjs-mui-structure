"use client";

import { API_PATCH_SIM_REJECT_ID } from "@/constrains/api";
import { ApiResponse } from "@/types/api";
import { Provider } from "@/types/provider";
import { getClientRequestHeaders } from "@/utils/csrOnly/getClientRequestHeaders";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useState } from "react";

export const UpdateSimRejectForm = (props: { closeModal: () => void }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const action = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      setIsLoading(true);

      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_HOST +
          API_PATCH_SIM_REJECT_ID +
          formData.get("id"),
        {
          method: "PATCH",
          headers: getClientRequestHeaders(),
          body: JSON.stringify({
            rejectRemark: formData.get("reason") || formData.get("otherReason"),
          }),
        }
      );

      const { success } = (await response.json()) as ApiResponse<Provider>;

      const type = success ? "success" : "error";

      router.replace(
        window.location.pathname + `?message=ຍົກເລີກສຳເລັດ&type=${type}`
      );

      if (success) props.closeModal();

      return setIsLoading(false);
    },
    [router, props]
  );

  return { action, isLoading };
};
