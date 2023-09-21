"use client";

import { API_UPDATE_ADMIN, API_UPDATE_PROFILE_IMAGE } from "@/constrains/api";
import { Admin } from "@/types/admin";
import { ApiResponse } from "@/types/api";
import { AdminPermission } from "@/types/permission";
import { getClientRequestHeaders } from "@/utils/csrOnly/getClientRequestHeaders";
import axios from "axios";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { useState, useCallback, FormEvent } from "react";

export const useHandlePermissionChange = (data: Admin) => {
  const [permissionState, setState] = useState<Set<string>>(
    new Set<string>(data.permission)
  );

  const handlePermissionChange = useCallback((newItem: AdminPermission) => {
    // check if parent

    setState((prev) => {
      // new set
      const newSet = new Set<string>(prev);

      if (newItem.value) {
        if (newSet.has(newItem.value)) newSet.delete(newItem.value);
        else newSet.add(newItem.value);
      } else {
        // check if parent
        if (newItem.permissions) {
          // check if all children are checked

          if (newItem.permissions.length === 0) return newSet;

          const children = newItem.permissions
            .map((item) => item.value)
            .filter((item) => typeof item === "string");

          const allChecked = children.every((item) => newSet.has(item!));

          if (allChecked) {
            // remove all children
            children.forEach((item) => newSet.delete(item!));
          } else {
            // add all children
            children.forEach((item) => newSet.add(item!));
          }
        }
      }

      return newSet;
    });
  }, []);

  return { permissionState, handlePermissionChange };
};

export const useSubmitEditAdmin = (props: {
  data: Admin;
  image: string | null;
}) => {
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>, permission: Set<string>) => {
      try {
        setLoading(true);

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        let image = "";

        if ((formData.get("file") as any).size > 0) {
          const IMAGE_URL =
            process.env.NEXT_PUBLIC_BACKEND_HOST + API_UPDATE_PROFILE_IMAGE;

          const imageResponse = await axios.post(IMAGE_URL, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          const { data: imageData } = imageResponse.data as ApiResponse<string>;

          image = imageData;
        }

        const URL =
          process.env.NEXT_PUBLIC_BACKEND_HOST +
          injectIdToPagePath(API_UPDATE_ADMIN, props.data._id);

        const body = JSON.stringify({
          firstName: formData.get("firstName") as string,
          lastName: formData.get("lastName") as string,
          phoneNumber: formData.get("phoneNumber") as string,
          email: formData.get("email") as string,
          isActive: formData.get("isActive"),
          permission: Array.from(permission),
          ...(image && { image }),
        });

        const response = await fetch(URL, {
          method: "PATCH",
          headers: getClientRequestHeaders(),
          body,
        });

        const data = (await response.json()) as ApiResponse<any>;

        if (!data.success) throw new Error(data.message);

        window.location.reload();

        alert("ແກ້ໄຂສຳເລັດ");
      } catch (error: any) {
        setLoading(false);
        alert(error.message || "Something went wrong");
      }
    },
    [props]
  );

  return { isLoading, handleSubmit };
};
