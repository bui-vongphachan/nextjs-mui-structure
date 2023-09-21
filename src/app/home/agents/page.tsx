import { CardFooter, HeaderActions, Select, SelectOption } from "./style";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/components/Core/Table";
import { getAgents } from "@/services/getAgents";
import PaginationController from "@/components/Core/PaginationAction/PageController";
import PaginationLimitDropdown from "@/components/Core/PaginationAction/LimitSelection";
import {
  PATH_TO_SEARCH_AGENT_PAGE,
  PATH_TO_AGENTS_PAGE,
  PATH_TO_AGENT_DETAIL_PAGE,
  PATH_TO_HOME,
} from "@/constrains/pagePath";
import {
  FixedScreenCard,
  FixedScreenCardBody,
  FixedScreenCardHeader,
} from "@/components/Core/ResponsiveCard";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import {
  PERMISSION_CREATE_AGENT,
  PERMISSION_VIEW_AGENTS,
} from "@/constrains/permissions";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@/components/Core/Button";
import PaginationSearchBox from "@/components/Core/PaginationAction/SearchBox";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import AvatarLink from "@/components/Core/AvatarLink";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import { SectionTitle } from "@/components/Core/Typography";
import { Stack } from "@mui/system";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import { PathProfile } from "@/utils/pathImages";
import { Metadata } from "next";

export let metadata: Metadata = {
  title: "ຕົວແທນ L3 | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

const AgentPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(admin, PERMISSION_VIEW_AGENTS);

  if (!isValid) return <PageDeniedAlert />;
  else {
    const agents = await getAgents(props.searchParams);

    const permissionSet = new Set(admin.permission);

    return (
      <FixedScreenCard fixedHeight>
        <BreadcrumbStack sx={{ mb: 1 }}>
          <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
          <BreadcrumbLink href={PATH_TO_AGENTS_PAGE} disabled>
            ຕົວແທນລົງທະບຽນເບີ
          </BreadcrumbLink>
        </BreadcrumbStack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <SectionTitle>ຂໍ້ມູນຕົວແທນລົງທະບຽນ</SectionTitle>
          <HeaderActions sx={{ alignItems: "center" }}>
            {permissionSet.has(PERMISSION_CREATE_AGENT) && (
              <Link
                href={PATH_TO_SEARCH_AGENT_PAGE}
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
          </HeaderActions>
        </Stack>
        <FixedScreenCardHeader
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <PaginationSearchBox
            placeholder="ຄົ້ນຫາຊື່"
            path={PATH_TO_AGENTS_PAGE}
            defaultValue={props.searchParams["search"] || ""}
          />
          <Select defaultValue={"status"}>
            <SelectOption disabled value={"status"}>
              ສະຖານະ
            </SelectOption>
            <SelectOption value="active">ໃຊ້ງານຢູ່</SelectOption>
            <SelectOption value="inactive">ປິດໃຊ້ງານ</SelectOption>
          </Select>
        </FixedScreenCardHeader>
        <FixedScreenCardBody body scrollable>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>ລຳດັບ</TableHeadCell>
                <TableHeadCell>ຂໍ້ມູນຜູ້ໃຊ້</TableHeadCell>
                <TableHeadCell>ເບີໂທ</TableHeadCell>
                <TableHeadCell>ລົງທະບຽນສຳເລັດ</TableHeadCell>
                <TableHeadCell>ສະຖານະ</TableHeadCell>
                <TableHeadCell>ທີ່ຢູ່</TableHeadCell>
              </TableRow>
              <TableRow>
                <TableHeadCell divider></TableHeadCell>
                <TableHeadCell divider></TableHeadCell>
                <TableHeadCell divider></TableHeadCell>
                <TableHeadCell divider></TableHeadCell>
                <TableHeadCell divider></TableHeadCell>
                <TableHeadCell divider></TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {agents.rows.map((agent, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{1 + index}</TableCell>
                    <TableCell>
                      <AvatarLink
                        alt="admin profile"
                        imageSrc={PathProfile(agent.user.image)}
                        path={injectIdToPagePath(
                          PATH_TO_AGENT_DETAIL_PAGE,
                          agent._id
                        )}
                      >
                        {agent.user.firstName} {agent.user.lastName}
                      </AvatarLink>
                    </TableCell>
                    <TableCell>{agent?.user?.phoneNumber}</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>
                      {agent.isActive ? "active" : "inactive"}
                    </TableCell>
                    <TableCell>
                      {(() => {
                        let address = "";

                        address += `${agent?.user?.village?.name}, `;
                        address += `${agent?.user?.district?.name}, `;
                        address += agent?.user?.province?.name;

                        return address;
                      })()}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </FixedScreenCardBody>
        <CardFooter>
          <PaginationLimitDropdown
            path={PATH_TO_AGENTS_PAGE}
            limit={20}
            total={agents.records}
            searchParams={props.searchParams}
          />
          <PaginationController
            path={PATH_TO_AGENTS_PAGE}
            limit={20}
            total={agents.records}
            searchParams={props.searchParams}
          />
        </CardFooter>
      </FixedScreenCard>
    );
  }
};

export default AgentPage;
