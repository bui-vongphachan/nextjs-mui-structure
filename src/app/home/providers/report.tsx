"use client";
import { utils, writeFile } from "xlsx";
import { useCallback } from "react";

const Report = (props: { data: any }) => {
  const providers = props.data?.rows;
  const setExport = useCallback(() => {
    try {
      const data = providers.map((item: any, index: number) => {
        return {
          ["index"]: index + 1,
          ["Name"]: item?.name,
          ["updatedAt"]: new Date().toLocaleDateString(),
          ["ຈຳນວນເຈົ້າໜ້າທີ່"]: new Date().toLocaleDateString(),
          ["ຈຳນວນຕົວແທນ"]: "ttest",
          ["ຈຳນວນເບີ"]: 10,
        };
      });

      const ws = utils.json_to_sheet(data);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "excample");

      writeFile(wb, `excample.xlsx`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <button onClick={() => setExport()}>Export</button>;
};

export default Report;
