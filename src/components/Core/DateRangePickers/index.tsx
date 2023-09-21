"use client";

import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import React, { useCallback, useState } from "react";
import { DateRangePicker, Range } from "react-date-range";
import "react-date-range/dist/styles.css"; // Import the styles
import "react-date-range/dist/theme/default.css"; // Import the theme
import Popper from "@mui/material/Popper";
import { DateRange, DateRangeInput } from "./style";
import CalendarIcon from "@/assets/svgs/calendar";
import { useRouter } from "next/navigation";

const DateRangePickers = () => {
  const router = useRouter();

  const [selectedDateRange, setSelectedDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleSelect = useCallback(
    (ranges: { [key: string]: Range }) => {
      let URL = window.location.pathname + window.location.search;

      if (!URL.includes("?")) URL += "?";

      const startDate = ranges.selection.startDate?.toISOString().split("T")[0];
      const endDate = ranges.selection.endDate?.toISOString().split("T")[0];

      if (startDate && endDate) {
        if (URL.includes("startDate")) {
          URL = URL.replace(/startDate=[^&]+/, `startDate=${startDate}`);
        } else URL += `startDate=${startDate}&`;

        if (URL.includes("endDate")) {
          URL = URL.replace(/endDate=[^&]+/, `endDate=${endDate}`);
        } else URL += `endDate=${endDate}&`;
      }

      setSelectedDateRange(ranges.selection);

      return router.replace(URL);
    },
    [router]
  );

  const close = useCallback(() => setAnchorEl(null), []);

  return (
    <ClickAwayListener onClickAway={close}>
      <DateRange style={{ zIndex: 1000, marginLeft: 0 }}>
        <DateRangeInput
          type="text"
          readOnly
          value={`${selectedDateRange.startDate?.toLocaleDateString()} - ${selectedDateRange.endDate?.toLocaleDateString()}`}
          onClick={handleClick}
        />
        <div onClick={handleClick} style={{ marginTop: "5px" }}>
          <CalendarIcon />
        </div>
        <Popper
          open={!!anchorEl}
          anchorEl={anchorEl}
          placement="bottom-start"
          sx={{
            zIndex: 1100,
            borderRadius: "8px",
            overflow: "hidden",
            width: "fit-content",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <DateRangePicker
            ranges={[selectedDateRange]}
            onChange={handleSelect}
          />
        </Popper>
      </DateRange>
    </ClickAwayListener>
  );
};

export default DateRangePickers;
