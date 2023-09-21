"use client";

import {
  AsideContainer,
  AsideContent,
  AsideMenuItem,
  AsideMenuItemContent,
  AsideToggleButton,
} from "./style";
import { useState, useEffect, useCallback } from "react";
import LeftAnglesIcon from "@/assets/svgs/angles-left";
import RightAnglesIcon from "@/assets/svgs/angles-right";

const AsideOpen = (props: { isActive: any; filteredPermissions: any }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(true);

  const handleAsideOpen = useCallback(() => {
    setIsAsideOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const checkResponsive = () => {
      if (window.innerWidth < 1000) setIsAsideOpen(false);
      else setIsAsideOpen(true);
    };

    checkResponsive();

    window.addEventListener("resize", checkResponsive);
    return () => window.removeEventListener("resize", checkResponsive);
  }, []);

  const handleActiveMenuItem = useCallback(
    (item: any) => {
      const isActive = item?.path?.split("/")[2] === props.isActive;

      return isActive;
    },
    [props.isActive]
  );

  return (
    <AsideContainer isOpen={isAsideOpen}>
      <AsideToggleButton onClick={handleAsideOpen}>
        {!isAsideOpen ? <RightAnglesIcon /> : <LeftAnglesIcon />}
      </AsideToggleButton>
      <AsideContent>
        {props.filteredPermissions.map((item: any, i: any) => {
          return (
            <AsideMenuItem
              key={i}
              isActive={handleActiveMenuItem(item)}
              href={item.path}
            >
              <AsideMenuItemContent>
                {item.icon}
                <span>{item.title}</span>
              </AsideMenuItemContent>
            </AsideMenuItem>
          );
        })}
      </AsideContent>
    </AsideContainer>
  );
};

export default AsideOpen;
