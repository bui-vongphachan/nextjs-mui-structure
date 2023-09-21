"use client";

import { API_PATCH_SIM_APPROVE_ID } from "@/constrains/api";
import { ApiResponse } from "@/types/api";
import { Provider } from "@/types/provider";
import { getClientRequestHeaders } from "@/utils/csrOnly/getClientRequestHeaders";
import { useRouter } from "next/navigation";
import { useCallback, FormEvent, useState } from "react";

const UpdateSimApproveForm = (props: { closeModal: () => void }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const action = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      setIsLoading(true);

      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_HOST +
          API_PATCH_SIM_APPROVE_ID +
          formData.get("id"),
        {
          method: "PATCH",
          headers: getClientRequestHeaders(),
        }
      );

      const { success } = (await response.json()) as ApiResponse<Provider>;

      const type = success ? "success" : "error";

      router.push(
        window.location.pathname + `?message=ອະນຸມັດສຳເລັດ&type=${type}`
      );

      if (success) props.closeModal();

      return setIsLoading(false);
    },
    [router, props]
  );

  return { action, isLoading };
};

export default UpdateSimApproveForm;
