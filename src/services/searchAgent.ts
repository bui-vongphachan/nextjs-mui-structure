import { API_GET_CUSTOMER_PHONE_NUMBERS } from "@/constrains/api";
import { ApiResponse } from "@/types/api";
import { Agent } from "@/types/agent";
import { cookies } from "next/headers";

export const searchAgent = async (key: string) => {
  if (!key) return;

  const URL = process.env.BACKEND_HOST + API_GET_CUSTOMER_PHONE_NUMBERS + key;

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
