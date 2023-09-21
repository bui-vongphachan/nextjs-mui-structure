"use client";

import { searchParamsToString } from "@/utils/searchParamsToString";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback } from "react";
import { LimitForm, LimitSelect, LimitSelectOption } from "./style";

const CustomSelect = (props: {
  field: string;
  options: { value: string; label: string }[];
  path: string;
  searchParams: any;
}) => {
  const router = useRouter();

  const handleSelect = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const params = {
        ...props.searchParams,
        [props.field]: event.target.value,
      };

      const url = searchParamsToString(params);

      return router.replace(props.path + url);
    },
    [props.searchParams, props.field, props.path, router]
  );

  return (
    <LimitForm>
      <LimitSelect
        defaultValue={props.options[0] ? props.options[0].value : ""}
        onChange={handleSelect}
      >
        {props.options.map((option, index: number) => (
          <LimitSelectOption key={index} value={option.value}>
            {option.label}
          </LimitSelectOption>
        ))}
      </LimitSelect>
    </LimitForm>
  );
};

export default CustomSelect;
