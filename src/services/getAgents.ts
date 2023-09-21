import { API_GET_AGENTS } from "@/constrains/api";
import { ApiResponse, Pagination } from "@/types/api";
import { Agent } from "@/types/agent";
import { searchParamsToString } from "@/utils/searchParamsToString";
import { cookies } from "next/headers";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { User } from "@/types/user";

export const getAgents = async (searchParams: any) => {
  const cookie = cookies();

  const user = JSON.parse(cookie.get("user")?.value || "{}") as User;

  const URL =
    process.env.BACKEND_HOST +
    injectIdToPagePath(API_GET_AGENTS, user.provider) +
    searchParamsToString(searchParams);

  const token = cookies().get("token");

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
  });

  const data = (await response.json()) as ApiResponse<Pagination<Agent>>;

  return data.data;
};
