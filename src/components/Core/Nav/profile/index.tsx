"use client";

import {
  PATH_TO_CHANGE_PASSWORD_PAGE,
  PATH_TO_LOGIN,
} from "@/constrains/pagePath";
import { Admin } from "@/types/admin";
import { PathProfile } from "@/utils/pathImages";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import Cookies from "universal-cookie";
import {
  ProfileButton,
  ProfileImageContainer,
  StyledMenu,
  StyledMenuItem,
} from "./style";

const Profile = (props: { admin: Admin }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const changePassword = useCallback(() => {
    return (window.location.href = PATH_TO_CHANGE_PASSWORD_PAGE);
  }, []);

  const handleLogout = useCallback(() => {
    const cookie = new Cookies();

    cookie.remove("token", { path: "/" });
    cookie.remove("user", { path: "/" });

    return (window.location.href = PATH_TO_LOGIN);
  }, []);

  return (
    <>
      <ProfileButton onClick={handleClick}>
        <ProfileImageContainer>
          <Image
            src={PathProfile(props.admin.provider.image)}
            alt="profile"
            width={40}
            height={40}
          />
        </ProfileImageContainer>
      </ProfileButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiMenu-paper": {
            boxShadow: "0px 8px 8px 0px rgba(0,0,0,0.25)",
          },
        }}
      >
        <StyledMenuItem onClick={changePassword}>ປ່ຽນລະຫັດຜ່ານ</StyledMenuItem>
        <StyledMenuItem onClick={handleLogout}>ອອກລະບົບ</StyledMenuItem>
      </StyledMenu>
    </>
  );
};

export default Profile;
