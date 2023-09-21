import {
  PATH_TO_USERS_PAGE,
  PATH_TO_CUSTOMER_PAGE,
  PATH_TO_HOME,
  PATH_TO_SIM_REQUEST_PAGE,
  PATH_TO_AGENTS_PAGE,
} from "@/constrains/pagePath";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SimCardIcon from "@mui/icons-material/SimCard";
import { headers } from "next/headers";
import AsideOpen from "./handleAsideOpen";

const menuList = [
  {
    title: "ພາບລວມ",
    icon: <LeaderboardIcon />,
    path: PATH_TO_HOME,
    permissions: [],
  },
  {
    title: "ຄຳຮ້ອງລົງທະບຽນ",
    icon: <SimCardIcon />,
    path: PATH_TO_SIM_REQUEST_PAGE,
    permissions: [],
  },
  {
    title: "ບັນຊີຜູ້ໃຊ້ງານ L4",
    icon: <RecordVoiceOverIcon />,
    path: PATH_TO_CUSTOMER_PAGE,
    permissions: [],
  },

  {
    title: "ຕົວແທນ L3",
    icon: <SupportAgentIcon />,
    path: PATH_TO_AGENTS_PAGE,
    permissions: [],
  },
  {
    title: "ເຈົ້າໜ້າທີ່",
    icon: <BusinessCenterIcon />,
    path: PATH_TO_USERS_PAGE,
    permissions: [],
  },
];

const Aside = async () => {
  const headersList = headers();

  const admin = await validateToken();

  const filteredPermissions = menuList.filter((item) => {
    if (item.permissions.length === 0) return true;

    const permissionString = JSON.stringify(item.permissions);

    return admin.permission.some((i) => permissionString.includes(i));
  });

  const isActive = headersList.get("x-invoke-path")?.split("/")[2];

  return (
    <AsideOpen isActive={isActive} filteredPermissions={filteredPermissions} />
  );
};

export default Aside;
