import { API_GET_DASHBOARD_SECONDARY_SUMMARY } from "@/constrains/api";
import { ApiResponse } from "@/types/api";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { cookies } from "next/headers";

export const getSecondaryDashboard = async () => {
  const user = cookies().get("user")?.value;

  const token = cookies().get("token");

  const URL =
    process.env.BACKEND_HOST +
    injectIdToPagePath(
      API_GET_DASHBOARD_SECONDARY_SUMMARY,
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
    simType: {
      sim020: string;
      sim030: string;
    };
    registerType: {
      newSim: string;
      registeredAccount: string;
    };
    registrationChannel: {
      bySelf: string;
      byAgentL3: string;
      byOther: string;
    };
    device: {
      Android: string;
      IOS: string;
      Huawei: string;
    };
  }>;

  return data;
};
