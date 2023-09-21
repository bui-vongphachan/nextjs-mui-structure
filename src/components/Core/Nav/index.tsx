import { Nav } from "./style";
import ProfileButton from "./profile";
import Image from "next/image";
import { SectionTitle } from "@/components/Core/Typography";
import { Stack } from "@mui/system";
import { validateToken } from "@/utils/ssrOnly/validateToken";

const Navbar = async () => {
  const admin = await validateToken();

  return (
    <Nav>
      <Stack direction="row" alignItems="center" spacing={4}>
        <Image width={48} height={48} src="/3grab-logo.png" alt="logo" />
        <SectionTitle sx={{ flex: 1 }}>ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ</SectionTitle>
        <ProfileButton admin={admin} />
      </Stack>
    </Nav>
  );
};

export default Navbar;
