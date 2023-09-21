import { API_GET_PROVINCES } from "@/constrains/api";
import { ApiResponse } from "@/types/api";
import { Province } from "@/types/province";

export const getProvinces = async () => {
  const URL = process.env.BACKEND_HOST + API_GET_PROVINCES + "?q=all";

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "x-api-key": process.env.PUBLIC_API_KEY || "",
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  const { data } = (await response.json()) as ApiResponse<Province[]>;

  return data;
};
