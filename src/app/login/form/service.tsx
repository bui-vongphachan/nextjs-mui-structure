import { API_LOGIN } from "@/constrains/api";
import { PATH_TO_FORBBIEN, PATH_TO_HOME } from "@/constrains/pagePath";
import { LoginResponse } from "@/types/authentication";
import { useRouter } from "next/navigation";
import { Dispatch, FormEvent, SetStateAction, useCallback } from "react";
import Cookies from "universal-cookie";

const useLoginFormService = (props: {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<
    SetStateAction<{
      isError: boolean;
      messages: string[];
    }>
  >;
}) => {
  const router = useRouter();

  const submitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      props.setLoading(true);

      props.setError({
        isError: false,
        messages: [],
      });

      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      return await fetch(process.env.NEXT_PUBLIC_BACKEND_HOST + API_LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: formData.get("phoneNumber") as string,
          password: formData.get("password") as string,
        }),
      })
        .then(async (response) => {
          const data = (await response.json()) as LoginResponse;

          if (!data.success) throw new Error(data.message);
          else {
            const cookie = new Cookies();

            const user = {
              _id: data.data.user._id,
              firstName: data.data.user.firstName,
              lastName: data.data.user.lastName,
              isActive: data.data.user.isActive,
              image: data.data.user.image,
              provider: data.data.user.provider,
            };

            if (!user.provider || !user.isActive)
              return router.push(PATH_TO_FORBBIEN);
            else {
              cookie.set("token", data.data.token, { path: "/" });
              cookie.set("user", JSON.stringify(user), { path: "/" });

              return router.push(PATH_TO_HOME);
            }
          }
        })
        .catch((error) => {
          props.setError({
            isError: true,
            messages: [error.message],
          });

          props.setLoading(false);
        });
    },
    [props, router]
  );

  return { submitForm };
};

export default useLoginFormService;
