import { API_GET_SIM_OWNER_DETAIL } from "@/constrains/api";
import { ApiResponse } from "@/types/api";
import { SimDetail } from "@/types/sims";
import { cookies } from "next/headers";

export const getSimRequestDetail = async (simId: any, userId: any) => {
  const URL = process.env.BACKEND_HOST + API_GET_SIM_OWNER_DETAIL;

  const token = cookies().get("token");

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
    body: JSON.stringify({
      sim: simId,
      user: userId,
    }),
  });

  const { data } = (await response.json()) as ApiResponse<SimDetail>;

  return data;
};
