import { API_CREATE_AGENTS } from "@/constrains/api";
import {
  PATH_TO_ADD_AGENT_PAGE,
  PATH_TO_AGENT_DETAIL_PAGE,
} from "@/constrains/pagePath";
import { ApiResponse } from "@/types/api";
import { Customer } from "@/types/customer";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createAgent = async (formData: any) => {
  "use server";

  const token = cookies().get("token");

  const URL = process.env.BACKEND_HOST + API_CREATE_AGENTS;

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
    body: JSON.stringify({ user: formData.get("user_id") }),
  });

  const { data, message, success } =
    (await response.json()) as ApiResponse<Customer>;

  const REDIRECT_URL =
    injectIdToPagePath(
      !success ? PATH_TO_ADD_AGENT_PAGE : PATH_TO_AGENT_DETAIL_PAGE,
      data._id
    ) + `?message=${message}`;

  return redirect(REDIRECT_URL, RedirectType.replace);
};
