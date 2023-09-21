import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/components/Core/Table";
import PaginationController from "@/components/Core/PaginationAction/PageController";
import PaginationLimitDropdown from "@/components/Core/PaginationAction/LimitSelection";
import {
  PATH_TO_ADD_USERS,
  PATH_TO_EDIT_USER_PAGE,
  PATH_TO_HOME,
  PATH_TO_USERS_PAGE,
  PATH_TO_USER_DETAIL_PAGE,
} from "@/constrains/pagePath";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import {
  FixedScreenCard,
  FixedScreenCardBody,
  FixedScreenCardFooter,
  FixedScreenCardHeader,
  FixedSscreenTopActions,
} from "@/components/Core/ResponsiveCard";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import PaginationSearchBox from "@/components/Core/PaginationAction/SearchBox";
import { TextH4 } from "@/components/Core/Typography";
import AvatarLink from "@/components/Core/AvatarLink";
import Link from "next/link";
import { Button } from "@/components/Core/Button";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import {
  PERMISSION_CREATE_ADMIN,
  PERMISSION_UPDATE_ADMIN_DETAIL,
  PERMISSION_VIEW_ADMINS,
} from "@/constrains/permissions";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import { PathProfile } from "@/utils/pathImages";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import { getAdmins } from "@/services/getAdmins";
import { Metadata } from "next";

export let metadata: Metadata = {
  title: "ເຈົ້າໜ້າທີ່ | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

const UserPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(admin, PERMISSION_VIEW_ADMINS);

  if (!isValid) return <PageDeniedAlert />;
  else {
    const users = await getAdmins(props.searchParams);

    const permissionSet = new Set(admin.permission);

    return (
      <FixedScreenCard fixedHeight>
        <BreadcrumbStack sx={{ mb: 1 }}>
          <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
          <BreadcrumbLink href={"/#"} disabled>
            ເຈົ້າໜ້າທີ່
          </BreadcrumbLink>
        </BreadcrumbStack>
        <FixedSscreenTopActions sx={{ mb: 2 }}>
          <TextH4>ລາຍການເຈົ້າໜ້າທີ່</TextH4>
          {permissionSet.has(PERMISSION_CREATE_ADMIN) && (
            <Link
              href={PATH_TO_ADD_USERS}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                variant="contained"
                icon
                scale="small"
                color="primary"
                sx={{ border: "none" }}
              >
                <AddIcon />
                ເພີ່ມ
              </Button>
            </Link>
          )}
        </FixedSscreenTopActions>
        <FixedScreenCardHeader>
          <PaginationSearchBox
            placeholder="ຄົ້ນຫາຊື່"
            path={PATH_TO_USERS_PAGE}
            defaultValue={props.searchParams["search"] || ""}
          />
        </FixedScreenCardHeader>
        <FixedScreenCardBody body scrollable>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>ລຳດັບ</TableHeadCell>
                <TableHeadCell>ຊື່ ແລະ ນາມສະກຸນ</TableHeadCell>
                <TableHeadCell>ເບີໂທ</TableHeadCell>
                <TableHeadCell>ສະຖານະ</TableHeadCell>
                <TableHeadCell>ແກ້ໄຂ</TableHeadCell>
              </TableRow>
              <TableRow>
                <TableHeadCell divider />
                <TableHeadCell divider />
                <TableHeadCell divider />
                <TableHeadCell divider />
                <TableHeadCell divider />
                <TableHeadCell divider />
              </TableRow>
            </TableHead>
            <TableBody>
              {!users ? (
                <h1>Loading...</h1>
              ) : (
                users.rows.map((user, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <AvatarLink
                          alt="admin profile"
                          imageSrc={PathProfile(user.image)}
                          path={injectIdToPagePath(
                            PATH_TO_USER_DETAIL_PAGE,
                            user._id
                          )}
                        >
                          {user.firstName} {user.lastName}
                        </AvatarLink>
                      </TableCell>
                      <TableCell>{user.phoneNumber}</TableCell>
                      <TableCell>
                        {user.isActive ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                      </TableCell>
                      <TableCell>
                        {permissionSet.has(PERMISSION_UPDATE_ADMIN_DETAIL) && (
                          <Link
                            href={injectIdToPagePath(
                              PATH_TO_EDIT_USER_PAGE,
                              user._id
                            )}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <Button icon scale="small" color="warning">
                              <EditIcon />
                              ແກ້ໄຂ
                            </Button>
                          </Link>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </FixedScreenCardBody>
        <FixedScreenCardFooter topBorder>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PaginationLimitDropdown
              path={PATH_TO_USERS_PAGE}
              limit={20}
              total={users?.records || 0}
              searchParams={props.searchParams}
            />
            <PaginationController
              path={PATH_TO_USERS_PAGE}
              limit={20}
              total={users?.records || 0}
              searchParams={props.searchParams}
            />
          </div>
        </FixedScreenCardFooter>
      </FixedScreenCard>
    );
  }
};

export default UserPage;
