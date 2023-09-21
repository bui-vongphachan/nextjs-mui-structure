import { SectionSubTitle } from "@/components/Core/Typography";
import { SimProofDetail } from "@/types/sims";
import { PathProofId } from "@/utils/pathImages";
import Image from "next/image";
import { ImageContainer } from "./style";

const SubscriberSelfProofCard = (props: { document: SimProofDetail }) => {
  if (!props.document)
    return <SectionSubTitle color="danger">ບໍ່ພົບຂໍ້ມູນ</SectionSubTitle>;

  return (
    <ImageContainer>
      {props.document.idProofFiles.map((file, index) => {
        return (
          <div key={index}>
            <Image
              fill
              src={PathProofId(file.file)}
              alt="face scan images"
              sizes="100%"
            />
          </div>
        );
      })}
    </ImageContainer>
  );
};

export default SubscriberSelfProofCard;
