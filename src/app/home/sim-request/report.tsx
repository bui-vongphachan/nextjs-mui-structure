"use client";

import { utils, writeFile } from "xlsx";
import { useCallback } from "react";
import { ExportExcelButton } from "@/components/Core/ExportExcelButton";
import { Fragment, useState, useContext } from "react";
import { API_GET_SIMS } from "@/constrains/api";
import { searchParamsToString } from "@/utils/searchParamsToString";
import { getClientRequestHeaders } from "@/utils/csrOnly/getClientRequestHeaders";
import { ApiResponse } from "@/types/api";
import { Sim } from "@/types/sims";
import { CustomSnackbarContext } from "@/components/Core/Snack";
import { translateSimStatus } from "@/utils/translateSimStatus";
import { LoadingOverlay } from "@/components/Core/LoadingOverlay";
import DownloadIcon from "@mui/icons-material/Download";

const Report = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const { openSnackbar } = useContext(CustomSnackbarContext);

  const setExport = useCallback(async () => {
    try {
      setIsLoading(true);

      const URL =
        process.env.NEXT_PUBLIC_BACKEND_HOST +
        API_GET_SIMS +
        searchParamsToString(props.searchParams) +
        "q=all";

      const response = await fetch(URL, {
        headers: getClientRequestHeaders(),
      });

      const {
        success,
        message,
        data: items,
      } = (await response.json()) as ApiResponse<Sim[]>;

      if (!success) {
        return openSnackbar({
          message,
          color: "danger",
        });
      }

      const data = items.map((item: any, index: number) => {
        return {
          ["ລຳດັບ"]: index + 1,
          ["ຊື່"]: item?.simOwner?.user?.firstName,
          ["ນາມສະກຸນ"]: item?.simOwner?.user?.lastName,
          ["ເພດ"]: item?.simOwner?.user?.gender,
          ["ເບີໂທລະສັບ"]: item?.simOwner?.user.phoneNumber,
          ["ປະເພດຊິນ"]: item?.isNew ? "ໃໝ່" : "ເກົ່າ",
          ["ຜູ້ໃຫ້ບໍລິການ"]: item?.simOwner?.sim?.provider?.name,
          ["ຜູ້ຂືຶນທະບຽນ"]: item?.simOwner?.sim?.isAgent
            ? `${item?.simOwner?.sim?.requestedBy?.firstName} ${item?.simOwner?.sim?.requestedBy?.lastName}`
            : "ດ້ວຍຕົນເອງ",
          ["ວັນທີ່ຂື້ນທະບຽນ"]: new Date(
            item?.simOwner?.createdAt
          )?.toLocaleDateString("en-Gb"),
          ["ສະຖານທີ່"]: "",
          ["ຜູ້ອະນຸມັດ"]: "",
          ["ວັນທີອະນຸມັດ"]: "",
          ["ສະຖານະ"]: translateSimStatus(item?.simOwner?.sim?.status),
          ["ໝາຍເຫດ"]: item?.simOwner?.sim?.rejectRemark,
        };
      });
      const dataArray = data.slice(0, data.length);
      const ws = utils.json_to_sheet(dataArray);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "ລາຍການຄຳຮ້ອງຂໍລົງທະບຽນ");

      writeFile(wb, `ລາຍການເບີໂທ.xlsx`);
    } catch (error: any) {
      openSnackbar({
        message: error?.message || error || "",
        color: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  }, [props, openSnackbar]);

  return (
    <Fragment>
      <LoadingOverlay isLoading={isLoading}>Loading...</LoadingOverlay>
      <ExportExcelButton onClick={setExport}>
        <DownloadIcon />
        ດາວໂຫຼດ
      </ExportExcelButton>
    </Fragment>
  );
};

export default Report;
