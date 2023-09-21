"use client";

import CloseIcon from "@/assets/svgs/close";
import {
  SimRejectFormButton,
  SimRejectFormButtonCancel,
  SimRejectFormButtonReject,
  SimRejectFormIcon,
  SimRejectFormTitle,
} from "@/components/Sim/RejectionForm";
import React from "react";
import { LoadingOverlay } from "@/components/Core/LoadingOverlay";
import { Modal } from "@mui/material";
import { UpdateSimRejectForm } from "./service";
import { TextH4 } from "@/components/Core/Typography";
import { CheckboxInput, FormContainer, SimRejectForm, TextArea } from "./style";
import { Stack } from "@mui/system";

const SimRejectionFormModal = (props: {
  id: any;
  open: boolean;
  closeModal: () => void;
}) => {
  const [isOther, setIsOther] = React.useState(false);

  const { action, isLoading } = UpdateSimRejectForm({
    closeModal: props.closeModal,
  });

  return (
    <Modal open={props.open}>
      <FormContainer>
        <LoadingOverlay isLoading={isLoading}>Loading...</LoadingOverlay>
        <SimRejectForm onSubmit={action}>
          <input readOnly name="id" value={props.id} hidden />
          <SimRejectFormTitle>ປະຕິເສດການລົງທະບຽນ</SimRejectFormTitle>
          <SimRejectFormIcon>
            <CloseIcon />
          </SimRejectFormIcon>
          <TextH4 sx={{ pt: 8, pb: 2 }}>ກະລຸນາລະບຸເຫດຜົນ</TextH4>
          <Stack spacing={2}>
            <Stack direction="row">
              <CheckboxInput
                defaultChecked
                id="invalidImage"
                name="reason"
                value="image not clear"
                type="radio"
                onClick={() => setIsOther(false)}
              />
              <label htmlFor="invalidImage">
                ຮູບພາບບໍ່ແຈ້ງ ກະລຸນາລົງທະບຽນໃໝ່
              </label>
            </Stack>
            <Stack direction="row">
              <CheckboxInput
                id="expiredDocument"
                name="reason"
                value="Document is expired"
                type="radio"
                onClick={() => setIsOther(false)}
              />
              <label htmlFor="expiredDocument">ເອກະສານໝົດອາຍຸ</label>
            </Stack>
            <Stack direction="row">
              <CheckboxInput
                id="unmatchedDocument"
                name="reason"
                value="Unmatched document"
                type="radio"
                onClick={() => setIsOther(false)}
              />
              <label htmlFor="unmatchedDocument">ເອກະສານບໍ່ກົງກັນ</label>
            </Stack>
            <Stack direction="row">
              <CheckboxInput
                id="other"
                name="reason"
                value=""
                type="radio"
                checked={isOther}
                onChange={() => setIsOther(true)}
              />
              <label htmlFor="other">ອື່ນໆ</label>
            </Stack>
            <TextArea name="otherReason" isOpen={isOther} />
          </Stack>
          <SimRejectFormButton sx={{ mt: 8 }}>
            <SimRejectFormButtonReject variant="contained" type="submit">
              ຢືນຢັນ
            </SimRejectFormButtonReject>
            <SimRejectFormButtonCancel
              type="button"
              variant="outlined"
              onClick={props.closeModal}
            >
              ຍົກເລີກ
            </SimRejectFormButtonCancel>
          </SimRejectFormButton>
        </SimRejectForm>
      </FormContainer>
    </Modal>
  );
};

export default SimRejectionFormModal;
