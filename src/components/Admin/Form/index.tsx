"use client";

import {
  SectionSubTitle,
  SectionTitle,
  TextSmaller,
} from "@/components/Core/Typography";
import { Input } from "@/components/Core/Input";
import { Admin } from "@/types/admin";
import { Stack } from "@mui/system";
import { permissionFormValue } from "@/constrains/permissions";
import { Divider, Switch } from "@mui/material";
import { AdminPermission } from "@/types/permission";
import { Button } from "@/components/Core/Button";
import ProfileImageInput from "@/components/Admin/ImageInput";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import {
  BioStack,
  Container,
  PasswordStack,
  PermissionStack,
  RandomPasswordButton,
} from "./style";

const randomString = () => {
  return Math.random().toString(36).slice(-8);
};

const AdminFormLayout = (props: {
  data: Admin | null;
  permissions: Set<string>;
  handlePermissionChange: (newItem: AdminPermission) => void;
  imageState: [string | null, Dispatch<SetStateAction<string | null>>];
  isEdit?: boolean;
}) => {
  const [password, setPassword] = useState<string>(
    props.isEdit ? "" : randomString()
  );

  const [isActive, setIsActive] = useState<boolean>(
    props.isEdit ? props.data?.isActive || false : true
  );

  const router = useRouter();

  const randomPassword = useCallback(() => {
    setPassword(randomString());
  }, []);

  return (
    <Container>
      <BioStack spacing={2}>
        <ProfileImageInput imageState={props.imageState} />
        <input
          name="isActive"
          type="text"
          readOnly
          value={`${isActive}`}
          hidden
        />
        <Stack direction="row" spacing={3}>
          <Input
            required
            name="firstName"
            scale="small"
            placeholder="ຊື່"
            defaultValue={props.data?.firstName || ""}
          />
          <Input
            required
            name="lastName"
            scale="small"
            placeholder="ນາມສະກຸນ"
            defaultValue={props.data?.lastName || ""}
          />
        </Stack>
        <Input
          required
          name="phoneNumber"
          scale="small"
          placeholder="ເບີໂທ"
          type="tel"
          defaultValue={props.data?.phoneNumber || ""}
        />
        <Stack direction="row" spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Input
              id="active"
              type="checkbox"
              sx={{ height: "24px", width: "24px" }}
              checked={isActive}
              value={`true`}
              onChange={() => setIsActive(true)}
            />
            <label htmlFor="active">ເປີດໃຊ້ງານ</label>
            <Input
              id="inactive"
              type="checkbox"
              sx={{ height: "24px", width: "24px" }}
              checked={!isActive}
              value={`false`}
              onChange={() => setIsActive(false)}
            />
            <label htmlFor="inactive">ປິດໃຊ້ງານ</label>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center"></Stack>
        </Stack>
        <input name="password" readOnly value={password} hidden />
        <PasswordStack>
          <Input
            required={props.isEdit ? false : true}
            scale="small"
            placeholder="ລະຫັດຜ່ານ"
            minLength={8}
            disabled
            value={password}
          />
          <RandomPasswordButton
            color="gray"
            type="button"
            icon
            onClick={() => randomPassword()}
          >
            <AutorenewIcon />
          </RandomPasswordButton>
        </PasswordStack>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          sx={{ pt: 4 }}
        >
          <Button variant="contained" type="submit" scale="small">
            ບັນທຶກ
          </Button>
          <Button
            variant="outlined"
            type="button"
            onClick={() => router.back()}
            scale="small"
          >
            ຍົກເລີກ
          </Button>
        </Stack>
      </BioStack>
      <Divider orientation="vertical" flexItem />
      <PermissionStack spacing={4}>
        <SectionTitle>ສິດນຳໃຊ້ລະບົບ</SectionTitle>
        <Stack spacing={3}>
          {permissionFormValue.map((item, index) => {
            return (
              <Stack key={index} spacing={1} alignItems="flex-end">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ width: "100%" }}
                >
                  <SectionSubTitle>{item.title}</SectionSubTitle>
                  <Switch
                    onClick={() => props.handlePermissionChange(item)}
                    checked={item.permissions.every((permission) =>
                      props.permissions.has(permission.value!)
                    )}
                  />
                </Stack>
                <Stack spacing={0.25} sx={{ width: "90%" }}>
                  {item.permissions.map((permission, index) => {
                    return (
                      <Stack
                        key={index}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <TextSmaller>{permission.title}</TextSmaller>
                        <Switch
                          onClick={() =>
                            props.handlePermissionChange(permission)
                          }
                          checked={props.permissions.has(permission.value)}
                        />
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </PermissionStack>
    </Container>
  );
};

export default AdminFormLayout;
