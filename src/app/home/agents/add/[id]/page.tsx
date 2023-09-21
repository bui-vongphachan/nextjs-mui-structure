import { Suspense } from "react";
import {
  FixedScreenCard,
  FixedScreenCardBody,
} from "@/components/Core/ResponsiveCard";
import { Box } from "@mui/system";
import { TextH4 } from "@/components/Core/Typography";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import {
  PATH_TO_AGENTS_PAGE,
  PATH_TO_AGENT_DETAIL_PAGE,
  PATH_TO_HOME,
  PATH_TO_SEARCH_AGENT_PAGE,
} from "@/constrains/pagePath";
import { PERMISSION_CREATE_AGENT } from "@/constrains/permissions";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import CheckIcon from "@/assets/svgs/check";
import { Button } from "@/components/Core/Button";
import Stack from "@mui/system/Stack";
import BackButton from "@/components/Core/BackButton";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import { getCustomerDetail } from "@/services/getCustomerDetail";
import { getLastestUserDocumentation } from "@/services/getLastestUserDocumentation";
import { createAgent } from "@/services/createAgent";
import SubscriberInfoGrids from "@/components/Subscriber/InfoGrids";
import AvatarCard from "@/components/Core/AvatarCard";
import SubscriberSimList from "@/components/Subscriber/SimList";
import { getAgentByCustomerId } from "@/services/getAgentDetailByCustomerId";
import { redirect } from "next/navigation";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import SnackbarAlert from "@/components/Core/Snack/Alert";
import { Metadata } from "next";

export let metadata: Metadata = {
  title: "ເພີ່ມຕົວແທນລົງທະບຽນ | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

const AddAgentPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(admin, PERMISSION_CREATE_AGENT);

  if (!isValid) return <PageDeniedAlert />;
  else {
    const agent = await getAgentByCustomerId(props.params.id);

    if (agent.length > 0)
      return redirect(
        injectIdToPagePath(PATH_TO_AGENT_DETAIL_PAGE, agent[0]._id)
      );
    else {
      const customer = await getCustomerDetail(props.params.id);

      if (!customer) return <PageDeniedAlert message="ບໍ່ພົບຂໍ້ມູນບຸກຄົນນີ້" />;

      metadata.title = `${customer.firstName} ${customer.lastName} | ${metadata.title}`;

      const document = await getLastestUserDocumentation(customer._id);

      const subscriberSimList: JSX.Element = await SubscriberSimList({
        customerId: props.params.id,
      });

      return (
        <FixedScreenCard>
          <BreadcrumbStack sx={{ mb: 1 }}>
            <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
            <BreadcrumbLink href={PATH_TO_AGENTS_PAGE}>
              ຕົວແທນລົງທະບຽນເບີ
            </BreadcrumbLink>
            /
            <BreadcrumbLink href={PATH_TO_SEARCH_AGENT_PAGE}>
              ຄົ້ນຫາ
            </BreadcrumbLink>
          </BreadcrumbStack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <TextH4>ຂໍ້ມູນບັນຊີ</TextH4>
          </Stack>
          <FixedScreenCardBody
            sx={{ borderRadius: "12px", backgroundColor: "white" }}
          >
            <SnackbarAlert
              message={props.searchParams.message}
              color={props.searchParams.type || "success"}
            />
            <AvatarCard customer={customer} />
            <Box sx={{ mt: 5 }}>
              <TextH4 sx={{ mb: 2 }}>ບັນຊີຊິມ</TextH4>
              <Suspense fallback={<h4>Loading...</h4>}>
                {subscriberSimList}
              </Suspense>
            </Box>

            <SubscriberInfoGrids customer={customer} document={document} />
            {agent.length === 0 && (
              <form action={createAgent}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={4}
                  mt={4}
                >
                  <input hidden name="user_id" readOnly value={customer._id} />
                  <Button type="submit" variant="contained" icon>
                    <CheckIcon />
                    ສ້າງຕົວແທນໃໝ່
                  </Button>
                  <BackButton>ຍົກເລີກ</BackButton>
                </Stack>
              </form>
            )}
          </FixedScreenCardBody>
        </FixedScreenCard>
      );
    }
  }
};

export default AddAgentPage;
