import { SectionTitle } from "@/components/Core/Typography";
import { Button } from "@/components/Core/Button";
import { Input } from "@/components/Core/Input";
import { Stack } from "@mui/system";
import BackButton from "./backButton";
import { Container } from "./style";
import { changePassword } from "@/services/updateSelfPassword";
import SnackbarAlert from "@/components/Core/Snack/Alert";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ປ່ຽນລະຫັດຜ່ານ | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

const ChangePasswordPage = (props: any) => {
  return (
    <Container maxWidth={"xs"}>
      <Stack spacing={4} sx={{ my: 6 }}>
        <SnackbarAlert
          message={props.searchParams.message}
          color={props.searchParams.type || "success"}
        />
        <SectionTitle>ປ່ຽນລະຫັດຜ່ານ</SectionTitle>
        <form action={changePassword}>
          <Stack spacing={3}>
            <Input
              name="old"
              scale="small"
              placeholder="ລະຫັດຜ່ານເກົ່າ"
              type="password"
              required
            />
            <Stack spacing={1}>
              <Input
                name="new"
                scale="small"
                placeholder="ລະຫັດຜ່ານໃໝ່"
                required
                type="password"
              />
              <Input
                name="confirm"
                scale="small"
                placeholder="ລະຫັດຜ່ານໃໝ່ອີກຄັ້ງ"
                type="password"
                required
              />
            </Stack>
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button
                type="submit"
                scale="small"
                variant="contained"
                sx={{ border: "none" }}
              >
                ບັນທຶກ
              </Button>
              <BackButton />
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default ChangePasswordPage;
