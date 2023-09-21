import { API_GET_LASTEST_USER_PROOF } from "@/constrains/api";
import { ApiResponse } from "@/types/api";
import { SimProofDetail } from "@/types/sims";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { cookies } from "next/headers";

export const getLastestUserDocumentation = async (customerId: string) => {
  const URL =
    process.env.BACKEND_HOST +
    injectIdToPagePath(API_GET_LASTEST_USER_PROOF, customerId);

  const token = cookies().get("token");

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
  });

  const { data } = (await response.json()) as ApiResponse<SimProofDetail>;

  return data;
};
