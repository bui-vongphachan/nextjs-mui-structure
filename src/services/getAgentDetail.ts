import { API_GET_AGENT_DETAIL } from "@/constrains/api";
import { Agent } from "@/types/agent";
import { ApiResponse } from "@/types/api";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { cookies } from "next/headers";

export const getAgentDetail = async (agentId: string) => {
  const URL =
    process.env.BACKEND_HOST +
    injectIdToPagePath(API_GET_AGENT_DETAIL, agentId);

  const token = cookies().get("token");

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
  });

  const { data } = (await response.json()) as ApiResponse<Agent>;

  return data;
};
