import { Suspense } from "react";
import {
  FixedScreenCard,
  FixedScreenCardBody,
} from "@/components/Core/ResponsiveCard";
import { Box } from "@mui/system";
import { TextH4 } from "@/components/Core/Typography";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import { PATH_TO_CUSTOMER_PAGE, PATH_TO_HOME } from "@/constrains/pagePath";
import { PERMISSION_VIEW_CUSTOMER_DETAIL } from "@/constrains/permissions";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import { getCustomerDetail } from "@/services/getCustomerDetail";
import { getLastestUserDocumentation } from "@/services/getLastestUserDocumentation";
import SubscriberInfoGrids from "@/components/Subscriber/InfoGrids";
import AvatarCard from "@/components/Core/AvatarCard";
import SubscriberSimList from "@/components/Subscriber/SimList";
import SnackbarAlert from "@/components/Core/Snack/Alert";
import { Metadata } from "next";

export let metadata: Metadata = {
  title: "ບັນຊີຜູ້ໃຊ້ງານ | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

const AddAgentPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(
    admin,
    PERMISSION_VIEW_CUSTOMER_DETAIL
  );

  if (!isValid) return <PageDeniedAlert />;
  else {
    const customer = await getCustomerDetail(props.params.id);

    if (!customer) return <PageDeniedAlert />;

    metadata.title = `${customer.firstName} ${customer.lastName} | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ`;

    const document = await getLastestUserDocumentation(props.params.id);

    const subscriberSimList: JSX.Element = await SubscriberSimList({
      customerId: props.params.id,
    });

    return (
      <FixedScreenCard>
        <BreadcrumbStack sx={{ mb: 1 }}>
          <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
          <BreadcrumbLink href={PATH_TO_CUSTOMER_PAGE}>
            ບັນຊີຜູ້ໃຊ້ງານ L4
          </BreadcrumbLink>
        </BreadcrumbStack>
        <TextH4 sx={{ mb: 2 }}>ຂໍ້ມູນບັນຊີ</TextH4>
        <FixedScreenCardBody
          sx={{
            borderRadius: "12px",
            backgroundColor: "white",
          }}
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
        </FixedScreenCardBody>
      </FixedScreenCard>
    );
  }
};

export default AddAgentPage;
