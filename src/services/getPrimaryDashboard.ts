import { API_GET_DASHBOARD_PRIMARY_SUMMARY } from "@/constrains/api";
import { ApiResponse } from "@/types/api";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { cookies } from "next/headers";

export const getPrimaryDashboard = async () => {
  const user = cookies().get("user")?.value;

  const token = cookies().get("token");

  const URL =
    process.env.BACKEND_HOST +
    injectIdToPagePath(
      API_GET_DASHBOARD_PRIMARY_SUMMARY,
      JSON.parse(user || "")?.provider
    );

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.value : ""}`,
    },
  });

  const { data } = (await response.json()) as ApiResponse<{
    userCount: string;
    simCountall: string;
    newSimRegisterCount: string;
    registeredSimCount_approved: string;
    pendingSimCount: string;
    expiryDateIdProofs: string;
  }>;

  return data;
};
