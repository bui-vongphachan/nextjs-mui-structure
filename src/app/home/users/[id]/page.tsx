import PenIcon from "@/assets/svgs/pen";
import CircleImage from "@/components/Core/CircleImage";
import AvatarDescription from "@/components/Admin/AvatarDescription";
import { StatusBadge } from "@/components/Core/StatusBadge";
import { Button } from "@/components/Core/Button";
import { Stack } from "@mui/system";
import Link from "next/link";
import { getUserDetail } from "./service";
import { Section, Table } from "./style";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import {
  PATH_TO_EDIT_USER_PAGE,
  PATH_TO_HOME,
  PATH_TO_USERS_PAGE,
} from "@/constrains/pagePath";
import { FixedScreenCard } from "@/components/Core/ResponsiveCard";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import { SectionTitle, TextH4 } from "@/components/Core/Typography";
import {
  PERMISSION_UPDATE_ADMIN_DETAIL,
  PERMISSION_VIEW_ADMIN_DETAIL,
} from "@/constrains/permissions";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import { PathProfile } from "@/utils/pathImages";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";

const UserDetailPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(admin, PERMISSION_VIEW_ADMIN_DETAIL);

  if (!isValid) return <PageDeniedAlert />;
  else {
    const user = await getUserDetail(props);

    const info = [
      {
        names: ["ຊື່", "ນາມສະກຸນ", "ເບີໂທ"],
        values: [user.firstName, user.lastName, user.phoneNumber],
      },
      {
        names: ["ສ້າງເມື່ອ", "ສ້າງໂດຍ"],
        values: [user.firstName, user.lastName],
      },
    ];

    const permissionSet = new Set(admin.permission);

    return (
      <FixedScreenCard fixedHeight>
        <BreadcrumbStack sx={{ mb: 1 }}>
          <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
          <BreadcrumbLink href={PATH_TO_USERS_PAGE}>ເຈົ້າໜ້າທີ່</BreadcrumbLink>
        </BreadcrumbStack>
        <TextH4 sx={{ mb: 2 }}>ຂໍ້ມູນເຈົ້າໜ້າທີ່</TextH4>
        <Section>
          <Stack spacing={6}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={4}>
                <CircleImage
                  objectFit="cover"
                  src={PathProfile(user.image)}
                  alt="profile image"
                />
                <AvatarDescription
                  title={user.firstName + " " + user.lastName}
                  description={user.phoneNumber}
                  label={
                    <StatusBadge isActive={true}>{user.firstName}</StatusBadge>
                  }
                />
              </Stack>
              {permissionSet.has(PERMISSION_UPDATE_ADMIN_DETAIL) && (
                <Link
                  href={injectIdToPagePath(PATH_TO_EDIT_USER_PAGE, user._id)}
                  style={{ textDecoration: "none", height: "max-content" }}
                >
                  <Button icon scale="small" variant="outlined" color="warning">
                    <PenIcon />
                    Edit
                  </Button>
                </Link>
              )}
            </Stack>
            <Stack>
              <SectionTitle>ຂໍ້ມູນທົ່ວໄປ</SectionTitle>
              <Table>
                {info.map((item) => {
                  return (
                    <>
                      <thead>
                        <tr>
                          {item.names.map((name) => {
                            return <th key={name}>{name}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {item.values.map((value, index) => {
                            return (
                              <td key={`user-detail-value-${index}`}>
                                {value}
                              </td>
                            );
                          })}
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </Table>
            </Stack>
          </Stack>
        </Section>
      </FixedScreenCard>
    );
  }
};

export default UserDetailPage;
