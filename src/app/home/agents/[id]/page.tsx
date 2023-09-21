import { Suspense } from "react";
import {
  FixedScreenCard,
  FixedScreenCardBody,
} from "@/components/Core/ResponsiveCard";
import { Box, Stack } from "@mui/system";
import { TextH4 } from "@/components/Core/Typography";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import { PATH_TO_AGENTS_PAGE, PATH_TO_HOME } from "@/constrains/pagePath";
import {
  PERMISSION_UPDATE_AGENT_DETAIL,
  PERMISSION_VIEW_AGENT_DETAIL,
} from "@/constrains/permissions";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import DisableAgentForm from "@/components/Agent/DisableForm";
import { StatusBadge } from "@/components/Core/StatusBadge";
import { getLastestUserDocumentation } from "@/services/getLastestUserDocumentation";
import { getAgentDetail } from "@/services/getAgentDetail";
import SubscriberInfoGrids from "@/components/Subscriber/InfoGrids";
import AvatarCard from "@/components/Core/AvatarCard";
import SubscriberSimList from "@/components/Subscriber/SimList";
import SnackbarAlert from "@/components/Core/Snack/Alert";
import { Metadata } from "next";

export let metadata: Metadata = {
  title: "ຕົວແທນ L3 | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

const AgentDetailPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(admin, PERMISSION_VIEW_AGENT_DETAIL);

  if (!isValid) return <PageDeniedAlert />;
  else {
    const agent = await getAgentDetail(props.params.id as string);

    if (!agent) return <PageDeniedAlert message="ບໍ່ພົບຂໍ້ມູນຕົວແທນນີ້" />;

    metadata.title = `${agent.user.firstName} ${agent.user.lastName} | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ`;

    const document = await getLastestUserDocumentation(agent.user._id);

    const subscriberSimList: JSX.Element = await SubscriberSimList({
      customerId: agent.user._id,
    });

    const permissionSet = new Set(admin.permission);

    return (
      <FixedScreenCard>
        <BreadcrumbStack sx={{ mb: 1 }}>
          <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
          <BreadcrumbLink href={PATH_TO_AGENTS_PAGE}>
            ຕົວແທນລົງທະບຽນເບີ
          </BreadcrumbLink>
        </BreadcrumbStack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <TextH4 sx={{ display: "block" }}>ຂໍ້ມູນບັນຊີ</TextH4>
          {permissionSet.has(PERMISSION_UPDATE_AGENT_DETAIL) && (
            <DisableAgentForm agent={agent} />
          )}
        </Stack>
        <FixedScreenCardBody
          sx={{ borderRadius: "12px", backgroundColor: "white" }}
        >
          <SnackbarAlert
            message={props.searchParams.message}
            color={props.searchParams.type || "success"}
          />
          <AvatarCard
            customer={agent.user}
            label={
              <StatusBadge isActive={agent.isActive} sx={{ mt: 1 }}>
                {agent.isActive ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
              </StatusBadge>
            }
          />
          <Box sx={{ mt: 5 }}>
            <TextH4 sx={{ mb: 2 }}>ບັນຊີຊິມ</TextH4>
            <Suspense fallback={<h4>Loading...</h4>}>
              {subscriberSimList}
            </Suspense>
          </Box>
          <SubscriberInfoGrids customer={agent.user} document={document} />
        </FixedScreenCardBody>
      </FixedScreenCard>
    );
  }
};

export default AgentDetailPage;
