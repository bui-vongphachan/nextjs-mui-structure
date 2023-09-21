"use client";

import EyeCloseIcon from "@/assets/svgs/eye-close";
import EyeOpenIcon from "@/assets/svgs/eye-open";
import { Input } from "@/components/Core/Input";
import { ServerPageProps, DefaultPageProps } from "@/types/page";
import { useState } from "react";
import useLoginFormService from "./service";
import {
  ConfirmButton,
  ForgotPasswordButton,
  FormGroup,
  HelperTextBox,
  PasswordInput,
  PasswordInputContainer,
  PasswordReavelButton,
} from "./style";

const FormContainer = (props: ServerPageProps<DefaultPageProps>) => {
  const [isPasswordReavel, setIsPasswordReavel] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const [error, setError] = useState<{ isError: boolean; messages: string[] }>({
    isError: !!props.searchParams.message,
    messages: [props.searchParams.message || ""],
  });

  const { submitForm } = useLoginFormService({ setLoading, setError });

  return (
    <form onSubmit={submitForm}>
      <HelperTextBox isActive={error.isError}>
        <ul>
          {error.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </HelperTextBox>
      <FormGroup>
        <Input
          type="tel"
          name="phoneNumber"
          disabled={isLoading}
          autoComplete="on"
          required
          placeholder="ປ້ອນເບີໂທລະສັບ..."
        />
      </FormGroup>
      <FormGroup>
        <PasswordInputContainer>
          <PasswordInput
            type={isPasswordReavel ? "text" : "password"}
            name="password"
            required
            placeholder="ປ້ອນລະຫັດຜ່ານ"
            disabled={isLoading}
            autoComplete="on"
          />
          <PasswordReavelButton
            type="button"
            disabled={isLoading}
            isReavel={isPasswordReavel}
            onClick={() => setIsPasswordReavel(!isPasswordReavel)}
          >
            <EyeCloseIcon />
            <EyeOpenIcon />
          </PasswordReavelButton>
        </PasswordInputContainer>
      </FormGroup>
      <ConfirmButton disabled={isLoading} type="submit">
        ເຂົ້າສູ່ລະບົບ
      </ConfirmButton>
    </form>
  );
};

export default FormContainer;
