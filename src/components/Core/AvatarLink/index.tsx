import Image from "next/image";
import { StyledLink } from "./style";

const AvatarLink = (props: {
  path: string;
  imageSrc: string;
  alt: string;
  children: React.ReactNode;
}) => {
  return (
    <StyledLink href={props.path}>
      <Image width={40} height={40} src={props.imageSrc} alt={props.alt} />
      {props.children}
    </StyledLink>
  );
};

export default AvatarLink;
