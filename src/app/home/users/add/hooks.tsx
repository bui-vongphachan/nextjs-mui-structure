"use client";

import { API_CREATE_ADMINS, API_UPDATE_PROFILE_IMAGE } from "@/constrains/api";
import { Admin } from "@/types/admin";
import { ApiResponse } from "@/types/api";
import { AdminPermission } from "@/types/permission";
import { User } from "@/types/user";
import { getClientRequestHeaders } from "@/utils/csrOnly/getClientRequestHeaders";
import axios from "axios";
import { useState, useCallback, FormEvent } from "react";
import Cookies from "universal-cookie";

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

export const useSubmitCreateAdmin = (props: { image: string | null }) => {
  const [isLoading, setLoading] = useState(false);

  const [data, setData] = useState<Admin | null>(null);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>, permission: Set<string>) => {
      try {
        event.preventDefault();

        setLoading(true);
        setData(null);

        const formData = new FormData(event.currentTarget);

        const cookie = new Cookies();

        const user = cookie.get("user") as User;

        const IMAGE_URL =
          process.env.NEXT_PUBLIC_BACKEND_HOST + API_UPDATE_PROFILE_IMAGE;

        const imageResponse = await axios.post(IMAGE_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const { data: imageData } = imageResponse.data as ApiResponse<string>;

        const URL = process.env.NEXT_PUBLIC_BACKEND_HOST + API_CREATE_ADMINS;

        const body = JSON.stringify({
          admins: [
            {
              firstName: formData.get("firstName") as string,
              lastName: formData.get("lastName") as string,
              phoneNumber: formData.get("phoneNumber") as string,
              password: formData.get("password") as string,
              isActive: formData.get("isActive"),
              permission: Array.from(permission),
              image: imageData,
              provider: user.provider,
            },
          ],
        });

        const response = await fetch(URL, {
          method: "POST",
          headers: getClientRequestHeaders(),
          body,
        });

        const data = (await response.json()) as ApiResponse<any>;

        if (!data.success) throw new Error(data.message);

        setData({
          ...data.data[0],
          password: formData.get("password") as string,
        });
      } catch (error: any) {
        alert(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { isLoading, handleSubmit, data, setData };
};
