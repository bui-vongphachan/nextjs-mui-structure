import { API_ACTIVE_AGENT, API_DEACTIVE_AGENT } from "@/constrains/api";
import { Agent } from "@/types/agent";
import { ApiResponse } from "@/types/api";
import { getClientRequestHeaders } from "@/utils/csrOnly/getClientRequestHeaders";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const useDisableAgent = (props: {
  modalClose: () => void;
  agent: Agent;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const action = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      setIsLoading(true);

      event.preventDefault();

      const URL =
        process.env.NEXT_PUBLIC_BACKEND_HOST +
        injectIdToPagePath(
          props.agent.isActive ? API_DEACTIVE_AGENT : API_ACTIVE_AGENT,
          props.agent._id
        );

      const response = await fetch(URL, {
        method: "PATCH",
        headers: {
          ...getClientRequestHeaders(),
        },
      });

      const { success } = (await response.json()) as ApiResponse<any>;

      const message = success ? "ສຳເລັດ" : "ລົ້ມເຫຼວ";

      setIsLoading(false);

      alert(message);

      if (success) {
        router.refresh();
        props.modalClose();
      }
    },
    [props, router]
  );

  return { isLoading, action };
};
