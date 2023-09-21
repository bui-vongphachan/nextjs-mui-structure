"use client";

import { Button } from "@/components/Core/Button";
import { SimDetail, SimProofDetail } from "@/types/sims";
import { Fragment, useCallback, useState } from "react";
import ReviewsIcon from "@mui/icons-material/Reviews";
import {
  CloseButton,
  Dialog,
  DialogActionBar,
  IdentificationContainer,
  SelfProofContainer,
} from "./style";
import { Carousel } from "@/components/Core/Carousel";
import CloseIcon from "@mui/icons-material/Close";
import { TextH4 } from "@/components/Core/Typography";
import CheckIcon from "@mui/icons-material/Check";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import SimRejectionFormModal from "../Registration/RejectionFormModal/RejectForm";
import SimApprovalFormModal from "../Registration/ApprovalFormModal/ApproveForm";
import { PathFacial } from "@/utils/pathImages";
import SubscriberSelfProofCard from "@/components/Subscriber/SelfProofCard";
import SubscriberIdentificationCard from "@/components/Subscriber/IdentificationCard";

const SimRequestReview = (props: {
  sim: SimDetail;
  document: SimProofDetail;
}) => {
  const [open, setOpen] = useState(false);

  const [approvalDialog, setApprovalDialog] = useState(false);

  const [rejectionDialog, setRejectionDialog] = useState(false);

  const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);

  const toggleApprovalDialog = useCallback(
    () => setApprovalDialog((prev) => !prev),
    []
  );

  const toggleRejectionDialog = useCallback(
    () => setRejectionDialog((prev) => !prev),
    []
  );

  return (
    <Fragment>
      <Dialog isOpen={open}>
        <SimApprovalFormModal
          id={props.sim._id}
          open={approvalDialog}
          closeModal={toggleApprovalDialog}
        />
        <SimRejectionFormModal
          id={props.sim._id}
          open={rejectionDialog}
          closeModal={toggleRejectionDialog}
        />
        <CloseButton onClick={toggleOpen}>
          <CloseIcon />
        </CloseButton>
        <Carousel
          images={props.document.facialFiles.map((item) =>
            PathFacial(item.file)
          )}
        />
        <div>
          <DialogActionBar>
            <Button icon variant="contained" onClick={toggleApprovalDialog}>
              <CheckIcon />
              Approve
            </Button>
            <Button icon variant="outlined" onClick={toggleRejectionDialog}>
              <DoDisturbIcon />
              Reject
            </Button>
          </DialogActionBar>
          <IdentificationContainer>
            <TextH4>ຂໍ້ມູນຢືນຢັນຕົວຕົນ</TextH4>
            <SubscriberIdentificationCard document={props.document} />
          </IdentificationContainer>
          <SelfProofContainer>
            <TextH4 style={{ marginBottom: "1rem" }}>
              ຮູບພາບບຸກຄົນພ້ອມເອກະສານ
            </TextH4>
            <SubscriberSelfProofCard document={props.document} />
          </SelfProofContainer>
        </div>
      </Dialog>
      <Button icon variant="contained" onClick={toggleOpen}>
        <ReviewsIcon />
        Review
      </Button>
    </Fragment>
  );
};

export default SimRequestReview;
