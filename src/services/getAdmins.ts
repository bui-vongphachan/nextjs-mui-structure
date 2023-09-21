import { API_GET_ADMINS } from "@/constrains/api";
import { ApiResponse, Pagination } from "@/types/api";
import { searchParamsToString } from "@/utils/searchParamsToString";
import { cookies } from "next/headers";
import { Admin } from "@/types/admin";

export const getAdmins = async (searchParams: any) => {
  const URL =
    process.env.BACKEND_HOST +
    API_GET_ADMINS +
    searchParamsToString(searchParams);

  const token = cookies().get("token");

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
  });

  const { data } = (await response.json()) as ApiResponse<Pagination<Admin>>;

  return data;
};
