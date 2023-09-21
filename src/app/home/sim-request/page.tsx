import { CardFooter, PhoneNumberLink } from "./style";
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
  PATH_TO_SIM_REQUEST_DETAIL_PAGE,
  PATH_TO_HOME,
  PATH_TO_SIM_REQUEST_PAGE,
} from "@/constrains/pagePath";
import {
  FixedScreenCard,
  FixedScreenCardBody,
  FixedScreenCardHeader,
} from "@/components/Core/ResponsiveCard";
import DateRangePickers from "@/components/Core/DateRangePickers";
import PaginationSearchBox from "@/components/Core/PaginationAction/SearchBox";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import { TextH4 } from "@/components/Core/Typography";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import { Button } from "@/components/Core/Button";
import CustomSelect from "@/components/Core/Select";
import { Stack } from "@mui/system";
import Link from "next/link";
import { PathProfile } from "@/utils/pathImages";
import CircleImage from "@/components/Core/CircleImage";
import { Sim, SimStatus } from "@/types/sims";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import {
  PERMISSION_REVIEW_SIM_REGISTRATION,
  PERMISSION_VIEW_SIM_REGISTRATIONS,
} from "@/constrains/permissions";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import { getSims } from "@/services/getSims";
import { getProvinces } from "@/services/getProvinces";
import Report from "./report";
import { Metadata } from "next";

export let metadata: Metadata = {
  title: "ຄຳຮ້ອງລົງທະບຽນ | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

const SimRequestPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(
    admin,
    PERMISSION_VIEW_SIM_REGISTRATIONS
  );

  if (!isValid) return <PageDeniedAlert />;
  else {
    const sims = await getSims(props.searchParams);

    const provinces = await getProvinces();

    const permissionSet = new Set(admin.permission);

    return (
      <FixedScreenCard fixedHeight>
        <BreadcrumbStack sx={{ mb: 1 }}>
          <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
          <BreadcrumbLink href={"/#"} disabled>
            ລາຍການຄຳຮ້ອງລົງທະບຽນ
          </BreadcrumbLink>
        </BreadcrumbStack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextH4>ລາຍການເບີໂທ</TextH4>
          <Report {...props} />
        </Stack>
        <FixedScreenCardHeader sx={{ mt: 2 }}>
          <Stack direction="row" alignItems="center" gap={2} flexWrap="wrap">
            <PaginationSearchBox
              inputSx={{ height: "44.5px" }}
              placeholder="ຄົ້ນຫາເບີໂທ"
              path={PATH_TO_SIM_REQUEST_PAGE}
              defaultValue={props.searchParams["search"] || ""}
            />
            <CustomSelect
              field="type"
              options={[
                { value: "", label: "ປະເພດການລົງທະບຽນ" },
                { value: "new", label: "ຂຶ້ນທະບຽນເບີໃໝ່" },
                { value: "change", label: "ປ່ຽນແປງເບີ" },
              ]}
              path={PATH_TO_SIM_REQUEST_PAGE}
              searchParams={props.searchParams}
            />
            <CustomSelect
              field="status"
              options={[
                { value: "", label: "ສະຖານະທັງໝົດ" },
                { value: "APPROVED", label: "ອະນຸມັດ" },
                { value: "PENDING", label: "ລໍຖ້າກວດສອບ" },
                { value: "REJECTED", label: "ປະຕິເສດ" },
              ]}
              path={PATH_TO_SIM_REQUEST_PAGE}
              searchParams={props.searchParams}
            />
            <CustomSelect
              field="province"
              options={provinces.map((province) => ({
                value: province._id,
                label: province.name,
              }))}
              path={PATH_TO_SIM_REQUEST_PAGE}
              searchParams={props.searchParams}
            />
            <DateRangePickers />
          </Stack>
        </FixedScreenCardHeader>
        <FixedScreenCardBody body scrollable>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>ລຳດັບ</TableHeadCell>
                <TableHeadCell>ໝາຍເລກໂທລະສັບ</TableHeadCell>
                <TableHeadCell>ຜູ້ຮ້ອງຂໍ</TableHeadCell>
                <TableHeadCell>ປະເພດການລົງທະບຽນ</TableHeadCell>
                <TableHeadCell>ວັນທີ</TableHeadCell>
                <TableHeadCell sx={{ textAlign: "center" }}>
                  ສະຖານະ
                </TableHeadCell>
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
              {sims.rows.map((sim, index: number) => {
                const imagePath = (() => {
                  if (sim.isAgent || !sim.simOwner)
                    return sim.requestedBy.image;
                  else if (typeof sim.simOwner === "string") return "";
                  else if (!sim.simOwner.user) return "";
                  else return sim.simOwner.user.image;
                })();

                const simOwnerId = (() => {
                  if (!sim.simOwner) return "";
                  else if (typeof sim.simOwner === "string") return "";
                  else if (!sim.simOwner.user) return "";
                  else return sim.simOwner.user._id;
                })();

                return (
                  <TableRow key={index}>
                    <TableCell>{1 + index}</TableCell>
                    <TableCell>
                      <PhoneNumberLink
                        prefetch={false}
                        href={
                          permissionSet.has(PERMISSION_REVIEW_SIM_REGISTRATION)
                            ? injectIdToPagePath(
                                PATH_TO_SIM_REQUEST_DETAIL_PAGE,
                                `${sim._id}-${simOwnerId}`
                              )
                            : PATH_TO_SIM_REQUEST_PAGE
                        }
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <strong>{sim.phoneNumber}</strong>
                      </PhoneNumberLink>
                    </TableCell>
                    <TableCell>
                      <Stack spacing={2} direction="row" alignItems="center">
                        <CircleImage
                          sx={{ width: "40px", height: "40px" }}
                          src={PathProfile(imagePath)}
                          objectFit="cover"
                          alt="admin profile"
                        />
                        <p>
                          {(() => {
                            if (!sim.requestedBy) return "";

                            if (typeof sim.requestedBy === "string")
                              return sim.requestedBy;
                            else
                              return (
                                sim.requestedBy.firstName +
                                " " +
                                sim.requestedBy.lastName
                              );
                          })()}
                        </p>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {sim.isAgent ? "ຈາກຕົວແທນ" : "ຈາກຕົນເອງ"}
                    </TableCell>
                    <TableCell>
                      {new Date(sim.updatedAt)?.toLocaleDateString("en-Gb")}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <SimAction
                        sim={sim}
                        permissionSet={permissionSet}
                        simOwnerId={simOwnerId}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </FixedScreenCardBody>
        <CardFooter>
          <PaginationLimitDropdown
            path={PATH_TO_SIM_REQUEST_PAGE}
            limit={20}
            total={sims.records}
            searchParams={props.searchParams}
          />
          <PaginationController
            path={PATH_TO_SIM_REQUEST_PAGE}
            limit={20}
            total={sims.records}
            searchParams={props.searchParams}
          />
        </CardFooter>
      </FixedScreenCard>
    );
  }
};

const SimAction = (props: {
  sim: Sim;
  permissionSet: Set<string>;
  simOwnerId: string;
}) => {
  if (props.sim.status === SimStatus.REJECTED) return <span>ປະຕິເສດ</span>;
  else if (props.sim.status === SimStatus.APPROVED) return <span>ອະນຸມັດ</span>;
  else if (props.sim.status === SimStatus.INITIATED)
    return <span>ລໍຖ້າເອກະສານ</span>;
  else if (props.sim.status !== SimStatus.PENDING)
    return <span>ບໍ່ພົບສສະຖານະ</span>;
  else if (!props.permissionSet.has(PERMISSION_REVIEW_SIM_REGISTRATION))
    return <span>ລໍຖ້າກວດສອບ</span>;
  else
    return (
      <Link
        prefetch={false}
        href={injectIdToPagePath(
          PATH_TO_SIM_REQUEST_DETAIL_PAGE,
          `${props.sim._id}-${props.simOwnerId}`
        )}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Button variant="contained">ກວດສອບ</Button>
      </Link>
    );
};

export default SimRequestPage;
