import { API_GET_CUSTOMERS } from "@/constrains/api";
import { ApiResponse, Pagination } from "@/types/api";
import { Customer } from "@/types/customer";
import { searchParamsToString } from "@/utils/searchParamsToString";
import { cookies } from "next/headers";

export const getCustomers = async (searchParams: any) => {
  const URL =
    process.env.BACKEND_HOST +
    API_GET_CUSTOMERS +
    searchParamsToString(searchParams);

  const token = cookies().get("token");

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
  });

  const { data } = (await response.json()) as ApiResponse<Pagination<Customer>>;

  return data;
};
