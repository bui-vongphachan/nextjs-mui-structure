import CheckCircleIcon from "@/assets/svgs/CheckCircle";
import {
  SectionDescription,
  SectionSubTitle,
  SmallText,
} from "@/components/Core/Typography";
import { getSubscriberSimList } from "@/services/getSubscriberSimList";
import { SimStatus } from "@/types/sims";
import { PathProfile } from "@/utils/pathImages";
import { translateSimStatus } from "@/utils/translateSimStatus";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import { OutlinedBadge, SimCard, SimCardImage, StyledBadge } from "./style";
import GradingIcon from "@mui/icons-material/Grading";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";

const SubscriberSimList = async (props: { customerId: string }) => {
  const sims = await getSubscriberSimList(props.customerId);

  if (!sims)
    return <SectionSubTitle color="danger">ບໍ່ພົບຂໍ້ມູນເບີໂທ</SectionSubTitle>;

  if (sims.length === 0)
    return <SectionSubTitle>ບໍ່ພົບລາຍການເບີໂທ</SectionSubTitle>;

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      {sims.map((item, index) => {
        return (
          <Grid item xs={12} md={4} key={`customer-phone-number-${index}`}>
            <SimCard>
              <SimCardImage>
                <Image
                  src={PathProfile(item.sim.provider.image)}
                  fill
                  alt=""
                  sizes="100%"
                />
              </SimCardImage>
              <Stack>
                <SectionSubTitle>{item.sim.phoneNumber}</SectionSubTitle>
                <SectionDescription>
                  {item.sim.provider.name}
                </SectionDescription>
                <SmallText>
                  {new Date(item.sim.createdAt)?.toLocaleDateString("en-Gb")}
                </SmallText>
              </Stack>
              <Stack
                sx={{ flex: 1 }}
                gap={1}
                justifyContent="start"
                alignItems="end"
              >
                <StyledBadge isActive={false} simStatus={item.sim.status}>
                  {item.sim.status === SimStatus.APPROVED ? (
                    <CheckCircleIcon />
                  ) : item.sim.status === SimStatus.PENDING ? (
                    <GradingIcon />
                  ) : item.sim.status === SimStatus.INITIATED ? (
                    <FilePresentIcon />
                  ) : (
                    <DoDisturbIcon />
                  )}

                  {translateSimStatus(item.sim.status)}
                </StyledBadge>
                <OutlinedBadge
                  isActive={true}
                  sx={{ display: item.isDefault ? "block" : "none" }}
                >
                  ເບີຫຼັກ
                </OutlinedBadge>
              </Stack>
            </SimCard>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SubscriberSimList;
