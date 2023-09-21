import { API_GET_SIMS } from "@/constrains/api";
import { ApiResponse, Pagination } from "@/types/api";
import { Sim } from "@/types/sims";
import { searchParamsToString } from "@/utils/searchParamsToString";
import { cookies } from "next/headers";

export const getSims = async (searchParams: any) => {
  const URL =
    process.env.BACKEND_HOST +
    API_GET_SIMS +
    searchParamsToString(searchParams);

  const token = cookies().get("token");

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
    cache: "no-cache",
  });

  const { data } = (await response.json()) as ApiResponse<Pagination<Sim>>;

  return data;
};
