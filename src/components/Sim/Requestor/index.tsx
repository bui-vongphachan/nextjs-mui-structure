import { SimDetail } from "@/types/sims";
import Image from "next/image";
import { getImageSrc, getName, getPhone, getType } from "./service";
import { Container } from "./style";
import { PathProfile } from "@/utils/pathImages";

const SimRequesterCard = (props: { simOwner: SimDetail }) => {
  const imageSrc = getImageSrc(props.simOwner);

  const name = getName(props.simOwner);

  const phoneNumber = getPhone(props.simOwner);

  const type = getType(props.simOwner);

  return (
    <Container>
      <div>
        <Image
          src={PathProfile(imageSrc)}
          fill
          alt="requestor profile image"
          sizes="40px"
        />
      </div>
      <div>
        <h2>{name}</h2>
        <div>{phoneNumber}</div>
        <strong>{type}</strong>
      </div>
    </Container>
  );
};

export default SimRequesterCard;
