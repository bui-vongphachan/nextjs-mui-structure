import { TextH4 } from "@/components/Core/Typography";
import { Grid } from "@mui/material";
import {
  FixedScreenCard,
  FixedScreenCardBody,
} from "@/components/Core/ResponsiveCard";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import { PATH_TO_HOME, PATH_TO_SIM_REQUEST_PAGE } from "@/constrains/pagePath";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import { Box, Stack } from "@mui/system";
import { SimStatus } from "@/types/sims";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { PERMISSION_VIEW_SIM_REGISTRATION_DETAIL } from "@/constrains/permissions";
import { getSimRequestDetail } from "@/services/getSimRequestDetail";
import { getLastestUserDocumentation } from "@/services/getLastestUserDocumentation";
import SimRegistrationActions from "@/components/Sim/Registration/ResponseAction";
import SubscriberInfoGrids from "@/components/Subscriber/InfoGrids";
import { SubscriberInfoStack } from "@/components/Subscriber/InfoGrids/style";
import SubscriberRequestingSim from "@/components/Subscriber/RequestingSim";
import SimRequesterCard from "@/components/Sim/Requestor";
import Activation from "./Activation";
import { RejectionAlert } from "@/components/Sim/RejectionAlert";
import { Metadata } from "next";

export let metadata: Metadata = {
  title: `ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ`,
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

const SimRequestDetailPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(
    admin,
    PERMISSION_VIEW_SIM_REGISTRATION_DETAIL
  );

  if (!isValid) return <PageDeniedAlert />;
  else {
    const ids = props.params.id.split("-");

    const sim = await getSimRequestDetail(ids[0], ids[1]);

    if (!sim) return <PageDeniedAlert message="ບໍ່ພົບຂໍ້ມູນໝາຍເລກໂທລະສັບ" />;
    else {
      const document = await getLastestUserDocumentation(ids[1]);

      metadata.title = `${sim.sim.phoneNumber} | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ`;

      return (
        <FixedScreenCard>
          <BreadcrumbStack sx={{ mb: 1 }}>
            <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
            <BreadcrumbLink href={PATH_TO_SIM_REQUEST_PAGE} prefetch={false}>
              ລາຍການຄຳຮ້ອງລົງທະບຽນ
            </BreadcrumbLink>
          </BreadcrumbStack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 2 }}
          >
            <TextH4 sx={{ display: "block" }}>ລາຍລະອຽດການລົງທະບຽນ</TextH4>
            {sim.sim.status === SimStatus.APPROVED && <Activation sim={sim} />}
          </Stack>
          <FixedScreenCardBody
            sx={{ borderRadius: "12px", backgroundColor: "white" }}
          >
            <Grid container spacing={5}>
              <Grid item xs={12} lg={6}>
                <SubscriberInfoStack>
                  <TextH4>ຂໍ້ມູນໝາຍເລກໂທລະສັບ</TextH4>
                  {typeof sim.sim.provider !== "string" && (
                    <SubscriberRequestingSim sim={sim.sim} />
                  )}
                </SubscriberInfoStack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <SubscriberInfoStack>
                  <TextH4>ຜູ້ຮ້ອງຂໍ</TextH4>
                  <SimRequesterCard simOwner={sim} />
                </SubscriberInfoStack>
              </Grid>
            </Grid>
            <RejectionAlert isShow={!!sim.sim?.rejectRemark}>
              {sim.sim?.rejectRemark}
            </RejectionAlert>
            <SubscriberInfoGrids customer={sim.user} document={document} />
            {sim.sim.status === SimStatus.PENDING && (
              <Box pt={4}>
                <SimRegistrationActions id={sim.sim._id} />
              </Box>
            )}
          </FixedScreenCardBody>
        </FixedScreenCard>
      );
    }
  }
};

export default SimRequestDetailPage;
