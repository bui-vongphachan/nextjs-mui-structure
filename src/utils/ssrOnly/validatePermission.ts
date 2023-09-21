import { PATH_TO_LOGIN } from "@/constrains/pagePath";
import { Admin } from "@/types/admin";
import { redirect } from "next/navigation";

export const validatePermission = async (
  admin: Admin | null,
  permission: string
) => {
  if (!admin) return redirect(PATH_TO_LOGIN);

  return admin.permission.includes(permission);
};
