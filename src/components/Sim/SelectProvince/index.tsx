"use client";
import React, { ChangeEvent, useCallback } from 'react'
import { ProvinceForm, ProvinceSelect, ProvinceSelectOption } from './style';
import { useRouter } from 'next/navigation';
import { searchParamsToString } from '@/utils/searchParamsToString';

export const SelectProvinceForm = (props: { provincesData: any; field: string; path: string; searchParams: any }) => {
    const route = useRouter();
    const handleSelect = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            const params = {
                ...props.searchParams, [props.field]: event.target.value,
            };

            const url = searchParamsToString(params);

            return route.push(props.path + url);
        },
        [props.searchParams, props.field, props.path, route]
    );
    return (
        <ProvinceForm>
            <ProvinceSelect
                onChange={handleSelect}
            >
                <ProvinceSelectOption value="">ແຂວງທັງໝົດ</ProvinceSelectOption>
                {props.provincesData?.data?.map((option: any, index: any) => (
                    <ProvinceSelectOption key={index} value={option._id}>{option.name}</ProvinceSelectOption>
                ))}
            </ProvinceSelect>
        </ProvinceForm>
    )
}
