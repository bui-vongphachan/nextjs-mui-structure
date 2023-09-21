import { SecondaryInfoCardItem, InfoCard, InfoCardItem } from "./style";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import { FixedScreenCard } from "@/components/Core/ResponsiveCard";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { PERMISSION_VIEW_DASHBOARD } from "@/constrains/permissions";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import { getPrimaryDashboard } from "@/services/getPrimaryDashboard";
import Stack from "@mui/system/Stack";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import { PATH_TO_HOME } from "@/constrains/pagePath";
import {
  TextH4,
  TextSmaller,
  LayoutTitle,
  SectionSubTitle,
} from "@/components/Core/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CameraFrontIcon from "@mui/icons-material/CameraFront";
import CameraRearIcon from "@mui/icons-material/CameraRear";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import HouseIcon from "@mui/icons-material/House";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import { getSecondaryDashboard } from "@/services/getSecondaryDashboard";

const HomePage = async () => {
  const admin = await validateToken();

  const isValid = await validatePermission(admin, PERMISSION_VIEW_DASHBOARD);

  if (!isValid) return <PageDeniedAlert />;
  else {
    const primaryDashboard = await getPrimaryDashboard();

    const secondaryDashboard = await getSecondaryDashboard();

    console.log(secondaryDashboard);

    return (
      <FixedScreenCard>
        <BreadcrumbStack sx={{ mb: 1 }}>
          <BreadcrumbLink href={PATH_TO_HOME} disabled>
            ໜ້າຫຼັກ
          </BreadcrumbLink>
        </BreadcrumbStack>
        <TextH4>ພາບລວມ</TextH4>
        <Stack spacing={4} sx={{ mt: 2 }}>
          <InfoCard>
            <Grid container sx={{ width: "100%" }}>
              <Grid item xs>
                <InfoCardItem>
                  <TextSmaller>ບັນຊີຜູ້ໃຊ້ L4 ທັງໝົດ</TextSmaller>
                  <LayoutTitle>{primaryDashboard.userCount}</LayoutTitle>
                </InfoCardItem>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <InfoCardItem>
                  <TextSmaller>ລົງທະບຽນທັງໝົດ</TextSmaller>
                  <LayoutTitle>{primaryDashboard.simCountall}</LayoutTitle>
                </InfoCardItem>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <InfoCardItem>
                  <TextSmaller>ລົງທະບຽນສຳເລັດ</TextSmaller>
                  <LayoutTitle>
                    {primaryDashboard.registeredSimCount_approved}
                  </LayoutTitle>
                </InfoCardItem>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <InfoCardItem>
                  <TextSmaller>ລໍຖ້າອະນຸມັດ</TextSmaller>
                  <LayoutTitle>{primaryDashboard.pendingSimCount}</LayoutTitle>
                </InfoCardItem>
              </Grid>
            </Grid>
          </InfoCard>
          <Grid container sx={{ width: "100%", mt: 4 }}>
            <Grid item xs>
              <Stack spacing={2}>
                <SectionSubTitle>ປະເພດໝາຍເລກ</SectionSubTitle>
                <SecondaryInfoCardItem>
                  <SettingsPhoneIcon />
                  <div>
                    <p>ໝາຍເລກໂທລະສັບມືຖື</p>
                    <h3>{secondaryDashboard.simType.sim020}</h3>
                  </div>
                </SecondaryInfoCardItem>
                <SecondaryInfoCardItem>
                  <HouseIcon />
                  <div>
                    <p>ໝາຍເລກໂທລະສັບບ້ານ</p>
                    <h3>{secondaryDashboard.simType.sim030}</h3>
                  </div>
                </SecondaryInfoCardItem>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack spacing={2}>
                <SectionSubTitle>ປະເພດການລົງທະບຽນ</SectionSubTitle>
                <SecondaryInfoCardItem>
                  <AddIcCallIcon />
                  <div>
                    <p>ໝາຍເລກໃໝ່</p>
                    <h3>{secondaryDashboard.registerType.newSim}</h3>
                  </div>
                </SecondaryInfoCardItem>
                <SecondaryInfoCardItem>
                  <FileCopyIcon />
                  <div>
                    <p>ໝາຍເລກເກົ່າ</p>
                    <h3>{secondaryDashboard.registerType.registeredAccount}</h3>
                  </div>
                </SecondaryInfoCardItem>
              </Stack>
            </Grid>
            <Grid item xs>
              <Stack spacing={2}>
                <SectionSubTitle>ຊ່ອງທາງການລົງທະບຽນ</SectionSubTitle>
                <SecondaryInfoCardItem>
                  <CameraFrontIcon />
                  <div>
                    <p>ລົງທະບຽນດ້ວຍຕົວເອງ</p>
                    <h3>
                      {secondaryDashboard.registrationChannel.bySelf +
                        secondaryDashboard.registrationChannel.byOther}
                    </h3>
                  </div>
                </SecondaryInfoCardItem>
                <SecondaryInfoCardItem>
                  <CameraRearIcon />
                  <div>
                    <p>ລົງທະບຽນໂດຍຕົວແທນ L3</p>
                    <h3>{secondaryDashboard.registrationChannel.byAgentL3}</h3>
                  </div>
                </SecondaryInfoCardItem>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </FixedScreenCard>
    );
  }
};

export default HomePage;
