import { searchParamsToString } from "@/utils/searchParamsToString";
import { redirect } from "next/navigation";

export const submitSearchInput = async (formData: any) => {
  "use server";

  return redirect(
    formData.get("url") +
      searchParamsToString({
        search: formData.get("search"),
      })
  );
};
