import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { TextH4 } from "@/components/Core/Typography";
import { Customer } from "@/types/customer";
import { SimProofDetail } from "@/types/sims";
import SubscriberSelfProofCard from "@/components/Subscriber/SelfProofCard";
import {
  SubscriberIdentificationImageCard,
  SubscriberInfoStack,
} from "./style";
import SubscriberBioCard from "@/components/Subscriber/BioCard";
import SubscriberFacialImages from "@/components/Subscriber/FacialImages";
import SubscriberIdentificationCard from "@/components/Subscriber/IdentificationCard";

const SubscriberInfoGrids = (props: {
  customer: Customer;
  document: SimProofDetail;
}) => {
  return (
    <Fragment>
      <Grid container spacing={5} sx={{ mt: 0 }}>
        <Grid item xs={12} lg={6}>
          <SubscriberInfoStack>
            <TextH4>ຂໍ້ມູນທົ່ວໄປ</TextH4>
            <SubscriberBioCard customer={props.customer} />
          </SubscriberInfoStack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SubscriberInfoStack>
            <TextH4>ຂໍ້ມູນຢືນຢັນຕົວຕົນ</TextH4>
            <SubscriberIdentificationCard document={props.document} />
          </SubscriberInfoStack>
        </Grid>
      </Grid>
      <Grid container spacing={5} sx={{ mt: 0 }}>
        <Grid item xs={12} lg={6}>
          <SubscriberIdentificationImageCard>
            <TextH4>ຮູບພາບບຸກຄົນພ້ອມເອກະສານ</TextH4>
            <SubscriberSelfProofCard document={props.document} />
          </SubscriberIdentificationImageCard>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SubscriberInfoStack>
            <TextH4>ຮູບພາບສະແກນໃບຫນ້າ</TextH4>
            <SubscriberFacialImages document={props.document} />
          </SubscriberInfoStack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SubscriberInfoGrids;
