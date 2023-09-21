import { LoadingOverlay } from "@/components/Core/LoadingOverlay";
import {
  SimApproveForm,
  SimApproveFormButton,
  SimApproveFormButtonCancel,
  SimApproveFormContainer,
  SimApproveFormIcon,
  SimApproveFormTitle,
} from "@/components/Sim/ApprovalForm ";
import { Modal } from "@mui/material";
import React from "react";
import UpdateSimApproveForm from "./service";
import SimApproveCheck from "@/assets/svgs/SimApproveCheck";
import { Button } from "@/components/Core/Button";

const SimApprovalFormModal = (props: {
  id: any;
  open: boolean;
  closeModal: () => void;
}) => {
  const { action: handleSubmit, isLoading } = UpdateSimApproveForm({
    closeModal: props.closeModal,
  });

  return (
    <Modal open={props.open}>
      <SimApproveFormContainer>
        <LoadingOverlay isLoading={isLoading}>Loading...</LoadingOverlay>
        <SimApproveForm onSubmit={handleSubmit}>
          <input readOnly type="text" hidden value={props.id} name="id" />
          <SimApproveFormTitle>ຢືນຢັນການລົງທະບຽນ</SimApproveFormTitle>
          <SimApproveFormIcon>
            <SimApproveCheck />
          </SimApproveFormIcon>
          <SimApproveFormButton sx={{ mt: 8 }}>
            <Button
              disabled={isLoading}
              variant="contained"
              color="primary"
              type="submit"
            >
              ຢືນຢັນ
            </Button>
            <SimApproveFormButtonCancel
              disabled={isLoading}
              type="button"
              variant="outlined"
              onClick={() => props.closeModal()}
            >
              ຍົກເລີກ
            </SimApproveFormButtonCancel>
          </SimApproveFormButton>
        </SimApproveForm>
      </SimApproveFormContainer>
    </Modal>
  );
};

export default SimApprovalFormModal;
