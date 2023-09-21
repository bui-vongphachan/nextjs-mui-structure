import { API_CHANGE_ADMIN_PASSWORD } from "@/constrains/api";
import { PATH_TO_CHANGE_PASSWORD_PAGE } from "@/constrains/pagePath";
import { ApiResponse } from "@/types/api";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const changePassword = async (formData: any) => {
  "use server";

  if (formData.get("new") !== formData.get("confirm")) {
    return redirect(
      PATH_TO_CHANGE_PASSWORD_PAGE +
        `?message=Password and confirm password are not the same&type=error`
    );
  }

  const cookie = cookies();

  const token = cookie.get("token");

  const response = await fetch(
    process.env.BACKEND_HOST + API_CHANGE_ADMIN_PASSWORD,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token ? token.value : ""}`,
      },
      body: JSON.stringify({
        curPassword: formData.get("old"),
        newPassword: formData.get("new"),
      }),
    }
  );

  const { success, message } = (await response.json()) as ApiResponse<any>;

  const type = success ? "success" : "error";

  const URL = `${PATH_TO_CHANGE_PASSWORD_PAGE}?message=${message}&type=${type}`;

  return redirect(URL, RedirectType.replace);
};
