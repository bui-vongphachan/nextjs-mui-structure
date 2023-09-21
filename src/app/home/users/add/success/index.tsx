import { Box, Stack, Unstable_Grid } from "@mui/system";
import {
  ImagePreview,
  NoticeMessage,
  OfficerName,
  TogglePasswordButton,
} from "./style";
import UserPlusIcon from "@/assets/svgs/user-plus";
import LeftArrowIcon from "@/assets/svgs/left-arrow";
import { PATH_TO_ADD_USERS, PATH_TO_USERS_PAGE } from "@/constrains/pagePath";
import { Admin } from "@/types/admin";
import { Dialog, DialogContent } from "@mui/material";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import Image from "next/image";
import EyeOpenIcon from "@/assets/svgs/eye-open";
import { Button } from "@/components/Core/Button";
import Link from "next/link";
import { Text } from "@/components/Core/Typography";

const AddNewUserSuccessPage = (props: {
  data: Admin | null;
  image: string | null;
  setData: Dispatch<SetStateAction<Admin | null>>;
  clearForm: () => void;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleReentry = useCallback(() => {
    setIsPasswordVisible(false);
    props.clearForm();
  }, [props]);

  return (
    <Dialog open={!!props.data}>
      <DialogContent>
        <Stack gap="2rem" sx={{ mb: 4 }}>
          <NoticeMessage>
            You successully create new officer account into the system.
          </NoticeMessage>
          <Stack alignItems="center">
            <ImagePreview>
              <Image
                fill
                src={props.image || "/fallback.jpeg"}
                alt="officer profile image"
                style={{ objectFit: "cover" }}
              />
            </ImagePreview>
            <OfficerName>
              {props.data?.firstName} {props.data?.lastName}
            </OfficerName>

            <Box sx={{ width: "90%", mt: 6 }}>
              <Unstable_Grid container columns={3}>
                <Unstable_Grid xs={1}>Username</Unstable_Grid>
                <Unstable_Grid xs={2}>{props.data?.phoneNumber}</Unstable_Grid>
              </Unstable_Grid>
            </Box>
            <Box sx={{ width: "90%" }}>
              <Unstable_Grid container columns={3}>
                <Unstable_Grid xs={1}>
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    sx={{ height: "100%" }}
                  >
                    Password
                  </Stack>
                </Unstable_Grid>
                <Unstable_Grid xs={2}>
                  <Stack direction="row" alignItems={"center"} gap={4}>
                    {isPasswordVisible
                      ? props.data?.password
                      : props.data?.password?.replace(/./g, "●")}
                    <TogglePasswordButton
                      icon
                      color="gray"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                      <EyeOpenIcon />
                    </TogglePasswordButton>
                  </Stack>
                </Unstable_Grid>
              </Unstable_Grid>
            </Box>
          </Stack>
        </Stack>
        <hr />
        <Stack direction="row" justifyContent="flex-end" gap="1rem">
          <Link href={PATH_TO_USERS_PAGE} style={{ textDecoration: "none" }}>
            <Button icon color="gray">
              <LeftArrowIcon />
              <Text>ກັບໄປລາຍການເຈົ້າໜ້າທີ່</Text>
            </Button>
          </Link>
          <Link href={PATH_TO_ADD_USERS} style={{ textDecoration: "none" }}>
            <Button
              icon
              variant="contained"
              onClick={handleReentry}
              sx={{ border: 0 }}
            >
              <UserPlusIcon />
              <Text>ເພີ່ມອີກຄັ້ງ</Text>
            </Button>
          </Link>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewUserSuccessPage;
