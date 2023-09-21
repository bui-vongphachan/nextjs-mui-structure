import { SectionSubTitle } from "@/components/Core/Typography";
import { SimProofDetail } from "@/types/sims";
import { PathFacial } from "@/utils/pathImages";
import { Box } from "@mui/system";
import Image from "next/image";
import { ImageContainer } from "./style";

const SubscriberFacialImages = (props: { document: SimProofDetail }) => {
  if (!props.document)
    return <SectionSubTitle color="danger">ບໍ່ພົບຂໍ້ມູນ</SectionSubTitle>;

  return (
    <ImageContainer>
      {props.document.facialFiles.map((item, index) => {
        return (
          <Box key={index}>
            <Image fill src={PathFacial(item.file)} alt="face scan images" />
          </Box>
        );
      })}
    </ImageContainer>
  );
};

export default SubscriberFacialImages;
