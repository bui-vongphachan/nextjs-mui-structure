import { API_GET_CUSTOMER_DETAIL } from "@/constrains/api";
import { ApiResponse } from "@/types/api";
import { Customer } from "@/types/customer";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { cookies } from "next/headers";

export const getCustomerDetail = async (customerId: string) => {
  const URL =
    process.env.BACKEND_HOST +
    injectIdToPagePath(API_GET_CUSTOMER_DETAIL, customerId);

  const token = cookies().get("token");

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
  });
  const { data } = (await response.json()) as ApiResponse<Customer>;

  return data;
};
