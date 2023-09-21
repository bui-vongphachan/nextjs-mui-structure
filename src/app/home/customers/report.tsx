"use client";
import { utils, writeFile } from "xlsx";
import { ExportExcelButton } from "@/components/Core/ExportExcelButton";
import { Fragment, useState, useContext, useCallback } from "react";
import { CustomSnackbarContext } from "@/components/Core/Snack";
import { LoadingOverlay } from "@/components/Core/LoadingOverlay";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { API_GET_CUSTOMERS_BY_PROVIDER } from "@/constrains/api";
import Cookies from "universal-cookie";
import { searchParamsToString } from "@/utils/searchParamsToString";
import { getClientRequestHeaders } from "@/utils/csrOnly/getClientRequestHeaders";
import { ApiResponse } from "@/types/api";
import { SimDetail } from "@/types/sims";
import DownloadIcon from "@mui/icons-material/Download";

const Report = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const { openSnackbar } = useContext(CustomSnackbarContext);

  const setExport = useCallback(async () => {
    try {
      setIsLoading(true);

      const cookie = new Cookies();

      const user = cookie.get("user");

      const URL =
        process.env.NEXT_PUBLIC_BACKEND_HOST +
        injectIdToPagePath(
          API_GET_CUSTOMERS_BY_PROVIDER,
          (user.provider + "") as string
        ) +
        searchParamsToString(props.searchParams) +
        "q=all";

      const response = await fetch(URL, {
        headers: getClientRequestHeaders(),
      });

      const {
        success,
        message,
        data: items,
      } = (await response.json()) as ApiResponse<SimDetail[]>;

      if (!success) {
        return openSnackbar({
          message,
          color: "danger",
        });
      }

      const data = items.map((item: any, index: number) => {
        return {
          ["index"]: index + 1,
          ["Name"]: item?.user?.firstName + " " + item?.user?.lastName,
          ["phoneNumber"]: item?.user?.phoneNumber,
          ["ວັນເດືອນປີເກີດ"]: new Date(item?.user?.dob)?.toLocaleDateString(
            "en-Gb"
          ),
          ["ອາຊີບ"]: (() => {
            if (!item?.user?.occupation) return "";
            else if (typeof item?.user?.occupation === "string") return "";
            else return item.user.occupation.name;
          })(),
          ["ຈຳນວນເບີ"]: item?.count,
        };
      });
      const dataArray = data.slice(0, data.length);
      const ws = utils.json_to_sheet(dataArray);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "ລາຍການບັນຊີຜູ້ໃຊ້ງານ L4");

      writeFile(wb, `ລາຍການບັນຊີຜູ້ໃຊ້ງານ L4.xlsx`);
    } catch (error: any) {
      openSnackbar({
        message: error?.message || error || "",
        color: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  }, [openSnackbar, props]);

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
