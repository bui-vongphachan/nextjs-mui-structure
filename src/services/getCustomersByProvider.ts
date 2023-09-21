import { API_GET_CUSTOMERS_BY_PROVIDER } from "@/constrains/api";
import { Admin } from "@/types/admin";
import { ApiResponse, Pagination } from "@/types/api";
import { SimDetail } from "@/types/sims";
import { searchParamsToString } from "@/utils/searchParamsToString";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { cookies } from "next/headers";

export const getCustomersByProvider = async (searchParams: any) => {
  const cookie = cookies();

  const user = JSON.parse(cookie.get("user")?.value || "{}") as Admin;

  const URL =
    process.env.BACKEND_HOST +
    injectIdToPagePath(
      API_GET_CUSTOMERS_BY_PROVIDER,
      (user.provider + "") as string
    ) +
    searchParamsToString(searchParams);

  const token = cookies().get("token");

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
  });

  const { data } = (await response.json()) as ApiResponse<
    Pagination<SimDetail>
  >;

  return data;
};
