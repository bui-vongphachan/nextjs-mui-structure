import { API_GET_ADMINS, API_VALIDATE_TOKEN } from "@/constrains/api";
import { PATH_TO_FORBBIEN, PATH_TO_LOGIN } from "@/constrains/pagePath";
import { Admin } from "@/types/admin";
import { ApiResponse } from "@/types/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const validateToken = async () => {
  const cookie = cookies();

  const token = cookie.get("token");
  const user = cookie.get("user");

  if (!user || !token) return redirect(PATH_TO_LOGIN);

  const activeValue = JSON.parse(user?.value);

  const adminsUrl =
    process.env.BACKEND_HOST + API_GET_ADMINS + "/" + activeValue._id;

  const responeUser = await fetch(adminsUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  });

  const { data: userData, success: boolean } =
    (await responeUser.json()) as ApiResponse<Admin>;

  if (!boolean) return redirect(PATH_TO_LOGIN);

  if (userData.isActive == false) return redirect(PATH_TO_LOGIN);

  const response = await fetch(process.env.BACKEND_HOST + API_VALIDATE_TOKEN, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });

  const { data, success } = (await response.json()) as ApiResponse<Admin>;

  if (!success) return redirect(PATH_TO_LOGIN);

  if (!data.provider || !data.isActive) return redirect(PATH_TO_FORBBIEN);

  return data;
};
