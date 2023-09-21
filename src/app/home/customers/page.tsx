import AvatarLink from "@/components/Core/AvatarLink";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import PaginationLimitDropdown from "@/components/Core/PaginationAction/LimitSelection";
import PaginationController from "@/components/Core/PaginationAction/PageController";
import PaginationSearchBox from "@/components/Core/PaginationAction/SearchBox";
import {
  FixedScreenCard,
  FixedScreenCardBody,
  FixedScreenCardHeader,
} from "@/components/Core/ResponsiveCard";
import { TextH4 } from "@/components/Core/Typography";
import {
  PATH_TO_CUSTOMER_DETAIL_PAGE,
  PATH_TO_CUSTOMER_PAGE,
  PATH_TO_HOME,
} from "@/constrains/pagePath";
import {
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableCell,
} from "@/components/Core/Table";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { CardFooter } from "./style";
import { PathProfile } from "@/utils/pathImages";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { PERMISSION_VIEW_CUSTOMERS } from "@/constrains/permissions";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import Report from "./report";
import { Stack } from "@mui/material";
import { getCustomersByProvider } from "@/services/getCustomersByProvider";
import { Metadata } from "next";

export let metadata: Metadata = {
  title: "ບັນຊີຜູ້ໃຊ້ງານ L4 | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

const CustomerPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(admin, PERMISSION_VIEW_CUSTOMERS);

  if (!isValid) return <PageDeniedAlert />;
  else {
    const customers = await getCustomersByProvider(props.searchParams);

    return (
      <FixedScreenCard fixedHeight>
        <BreadcrumbStack sx={{ mb: 1 }}>
          <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
          <BreadcrumbLink href={"/#"} disabled>
            ບັນຊີຜູ້ໃຊ້ງານ L4
          </BreadcrumbLink>
        </BreadcrumbStack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextH4>ບັນຊີຜູ້ໃຊ້ງານ L4</TextH4>
          <Report {...props} />
        </Stack>
        <FixedScreenCardHeader sx={{ mt: 2 }}>
          <PaginationSearchBox
            placeholder="ຄົ້ນຫາຊື່"
            path={PATH_TO_CUSTOMER_PAGE}
            defaultValue={props.searchParams["search"] || ""}
          />
        </FixedScreenCardHeader>
        <FixedScreenCardBody body scrollable>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>ລຳດັບ</TableHeadCell>
                <TableHeadCell>ຂໍ້ມູນຜູ້ໃຊ້ເບີ</TableHeadCell>
                <TableHeadCell>ເບີໂທຫຼັກ</TableHeadCell>
                <TableHeadCell>ວັນເດືອນປີເກີດ</TableHeadCell>
                <TableHeadCell>ອາຊີບ</TableHeadCell>
                <TableHeadCell>ຈຳນວນເບີ</TableHeadCell>
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
              {customers.rows.map((sim, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{1 + index}</TableCell>
                    <TableCell>
                      <AvatarLink
                        alt="person avatar"
                        imageSrc={PathProfile(sim.user.image)}
                        path={injectIdToPagePath(
                          PATH_TO_CUSTOMER_DETAIL_PAGE,
                          sim.user._id
                        )}
                      >
                        {sim.user.firstName + " " + sim.user.lastName}
                      </AvatarLink>
                    </TableCell>
                    <TableCell>{sim.user.phoneNumber}</TableCell>
                    <TableCell>
                      {new Date(sim.user.dob)?.toLocaleDateString("en-Gb")}
                    </TableCell>
                    <TableCell>
                      {(() => {
                        if (!sim.user.occupation) return "";
                        else if (typeof sim.user.occupation === "string")
                          return "";
                        else return sim.user.occupation.name;
                      })()}
                    </TableCell>
                    <TableCell>{sim.count}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </FixedScreenCardBody>
        <CardFooter>
          <PaginationLimitDropdown
            path={PATH_TO_CUSTOMER_PAGE}
            limit={20}
            total={customers.records}
            searchParams={props.searchParams}
          />
          <PaginationController
            path={PATH_TO_CUSTOMER_PAGE}
            limit={20}
            total={customers.records}
            searchParams={props.searchParams}
          />
        </CardFooter>
      </FixedScreenCard>
    );
  }
};

export default CustomerPage;
