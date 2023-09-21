import { LayoutTitle, SectionTitle } from "@/components/Core/Typography";
import { Customer } from "@/types/customer";
import { PathProfile } from "@/utils/pathImages";
import { Stack } from "@mui/system";
import Image from "next/image";
import { ImageContainer } from "./style";

const AvatarCard = (props: { customer: Customer; label?: React.ReactNode }) => {
  if (!props.customer) return <h3>ບໍ່ພົບຂໍ້ມູນບຸກຄົນນີ້</h3>;

  return (
    <Stack direction="row" flexWrap="wrap" gap={4}>
      <ImageContainer>
        <Image
          fill
          src={PathProfile(props.customer?.image)}
          style={{ objectFit: "cover" }}
          alt="profile image"
          sizes="100%"
        />
      </ImageContainer>
      <Stack flexWrap="wrap">
        <LayoutTitle>
          {props.customer.firstName + " " + props.customer.lastName}
        </LayoutTitle>
        <SectionTitle>{props.customer.phoneNumber}</SectionTitle>
        {props.label && props.label}
      </Stack>
    </Stack>
  );
};

export default AvatarCard;
