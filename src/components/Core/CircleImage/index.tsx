import Image from "next/image";
import { ImageContainer } from "./style";

const CircleImage = (props: {
  src: string;
  alt: string;
  objectFit: "cover" | "scale-down";
  sx?: any;
}) => {
  return (
    <ImageContainer sx={props.sx}>
      <Image
        priority
        fill
        style={{ objectFit: props.objectFit }}
        src={props.src}
        alt={props.alt}
        sizes="100%"
      />
    </ImageContainer>
  );
};

export default CircleImage;
