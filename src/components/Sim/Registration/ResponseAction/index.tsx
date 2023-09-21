"use client";
import { Button } from "@/components/Core/Button";
import { Stack } from "@mui/system";
import { useState, Fragment } from "react";
import SimApprovalFormModal from "../ApprovalFormModal/ApproveForm";
import SimRejectionFormModal from "../RejectionFormModal/RejectForm";

const SimRegistrationActions = (props: { id: any }) => {
  const [rejecModalOpen, setRejectModalOpen] = useState(false);
  const [approveModalOpen, setApproveModalOpen] = useState(false);
  const handleRejectModalOpen = () => {
    setRejectModalOpen(true);
  };
  const closeRejectionModal = () => {
    setRejectModalOpen(false);
  };
  const handleApproveModalOpen = () => {
    setApproveModalOpen(true);
  };
  const closeApprovalModal = () => {
    setApproveModalOpen(false);
  };

  return (
    <Fragment>
      <SimRejectionFormModal
        id={props.id}
        open={rejecModalOpen}
        closeModal={closeRejectionModal}
      />
      <SimApprovalFormModal
        id={props.id}
        open={approveModalOpen}
        closeModal={closeApprovalModal}
      />
      <Stack direction="row" justifyContent="center" spacing={12}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ px: 7 }}
          onClick={handleRejectModalOpen}
        >
          ປະຕິເສດ
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{ px: 7 }}
          onClick={handleApproveModalOpen}
        >
          ອະນຸມັດ
        </Button>
      </Stack>
    </Fragment>
  );
};

export default SimRegistrationActions;
