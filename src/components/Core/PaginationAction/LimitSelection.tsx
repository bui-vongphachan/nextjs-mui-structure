"use client";

import { searchParamsToString } from "@/utils/searchParamsToString";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback } from "react";
import {
  LimitDescription,
  LimitForm,
  LimitSelect,
  LimitSelectOption,
} from "./style";

const PaginationLimitDropdown = (props: {
  path: string;
  searchParams: any;
  limit: number;
  total: number;
}) => {
  const router = useRouter();

  const handleSelect = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const params = {
        ...props.searchParams,
        limit: event.target.value,
      };

      const url = searchParamsToString(params);

      return router.replace(props.path + url);
    },
    [props.searchParams, props.path, router]
  );

  return (
    <LimitForm>
      <LimitSelect defaultValue={props.limit || 20} onChange={handleSelect}>
        <LimitSelectOption value={10}>10</LimitSelectOption>
        <LimitSelectOption value={20}>20</LimitSelectOption>
        <LimitSelectOption value={50}>50</LimitSelectOption>
        <LimitSelectOption value={100}>100</LimitSelectOption>
      </LimitSelect>
      <LimitDescription>
        ສະແດງ {props.total <= props.limit ? props.total : props.limit} -{" "}
        {props.total <= props.limit ? props.total : props.limit} ຈາກ{" "}
        {props.total}
      </LimitDescription>
    </LimitForm>
  );
};

export default PaginationLimitDropdown;
