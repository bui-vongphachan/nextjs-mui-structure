import { FixedScreenCard } from "@/components/Core/ResponsiveCard";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import {
  PATH_TO_ADD_AGENT_PAGE,
  PATH_TO_AGENTS_PAGE,
  PATH_TO_HOME,
  PATH_TO_SEARCH_AGENT_PAGE,
} from "@/constrains/pagePath";
import { SectionTitle } from "@/components/Core/Typography";
import PaginationSearchBox from "@/components/Core/PaginationAction/SearchBox";
import { redirect } from "next/navigation";
import { injectIdToPagePath } from "@/utils/urlParamReplacer";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { PERMISSION_CREATE_AGENT } from "@/constrains/permissions";
import { searchAgent } from "@/services/searchAgent";
import { Metadata } from "next";

export let metadata: Metadata = {
  title: "ຄົ້ນຫາບັນຊີຜູ້ໃຊ້ງານ | ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

const SearchAgentPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(admin, PERMISSION_CREATE_AGENT);

  if (!isValid) return <PageDeniedAlert />;
  else {
    const searchResult = await searchAgent(props.searchParams.search);

    if (searchResult) {
      return redirect(
        injectIdToPagePath(PATH_TO_ADD_AGENT_PAGE, searchResult._id)
      );
    } else
      return (
        <FixedScreenCard>
          <BreadcrumbStack sx={{ mb: 1 }}>
            <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
            <BreadcrumbLink href={PATH_TO_AGENTS_PAGE}>
              ຕົວແທນລົງທະບຽນເບີ
            </BreadcrumbLink>
            /
            <BreadcrumbLink href={PATH_TO_SEARCH_AGENT_PAGE} disabled>
              ຄົ້ນຫາ
            </BreadcrumbLink>
          </BreadcrumbStack>
          <SectionTitle sx={{ mb: 2 }}>ຄົ້ນຫາຜູ້ໃຊ້ງານ</SectionTitle>
          <PaginationSearchBox
            placeholder="ເບີໂທລະສັບ"
            path={PATH_TO_SEARCH_AGENT_PAGE}
            defaultValue={props.searchParams["search"] || ""}
            button
          />
          <p>
            ບັນຊີຕົວແທນ (L3) ຕ້ອງເປັນບັນຊີທີ່ລົງທະບຽນໄວ້ກ່ອນໜ້ານີ້ <br />
            ສາມາດຄົ້ນຫາຈາກເບີໂທລະສັບທີ່ໃຊ້ລົງທະບຽນ
          </p>
          {!searchResult && !!props.searchParams.search && (
            <FixedScreenCard>
              <h1 style={{ textAlign: "center" }}>
                ບໍ່ພົບຜູ້ໃຊ້ງານເບີທີ່ທ່ານຄົ້ນຫາ
              </h1>
            </FixedScreenCard>
          )}
        </FixedScreenCard>
      );
  }
};

export default SearchAgentPage;
