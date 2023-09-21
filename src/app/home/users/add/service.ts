import { API_GET_ADMINS } from "@/constrains/api";
import { PATH_TO_NOT_FOUND, PATH_TO_SEVER_ERROR } from "@/constrains/pagePath";
import { Admin } from "@/types/admin";
import { ApiResponse } from "@/types/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getUserDetail = async (props: any) => {
  try {
    const URL =
      process.env.BACKEND_HOST + API_GET_ADMINS + "/" + props.params.id;

    const token = cookies().get("token");

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token ? token.value : ""}`,
      },
    });

    const data = (await response.json()) as ApiResponse<Admin>;

    if (data.status === 404 || data.data === null)
      return redirect(PATH_TO_NOT_FOUND);

    return data.data;
  } catch (error) {
    return redirect(PATH_TO_SEVER_ERROR);
  }
};
