"use client";

import { Button } from "@/components/Core/Button";
import { LoadingOverlay } from "@/components/Core/LoadingOverlay";
import { TextH4 } from "@/components/Core/Typography";
import { SimDetail } from "@/types/sims";
import { useState, useCallback } from "react";
import useActivationSimCardToggler from "./hooks";
import { Actions, Alert, Dialog, Form } from "./style";
import CheckIcon from "@mui/icons-material/Check";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const Activation = (props: { sim: SimDetail }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleActivationModal = useCallback(
    () => setModalOpen((prev) => !prev),
    []
  );

  const { isLoading, doAction } = useActivationSimCardToggler({
    toggleActivationModal,
    simRequest: props.sim,
  });

  return (
    <div>
      <Button
        color={props.sim.isActive ? "danger" : "primary"}
        variant="contained"
        onClick={toggleActivationModal}
      >
        {props.sim.isActive ? "ລະງັບການນຳໃຊ້ເບີ" : "ເປີດໃຊ້ເບີ"}
      </Button>
      <Dialog isOpen={isModalOpen}>
        <LoadingOverlay isLoading={isLoading}>Loading...</LoadingOverlay>
        <Form onSubmit={doAction}>
          <Alert>
            <TextH4>
              ທ່ານຕ້ອງການ{props.sim.isActive ? "ລະງັບ" : "ເປີດ"}ເບີນີ້ແທ້ບໍ່?
            </TextH4>
            <div>
              <PriorityHighIcon />
            </div>
          </Alert>
          <Actions>
            <Button
              icon
              type="submit"
              variant="contained"
              color={props.sim.isActive ? "danger" : "primary"}
            >
              <CheckIcon />
              ຢືນຢັນ
            </Button>
            <Button
              icon
              type="button"
              variant="outlined"
              onClick={toggleActivationModal}
              color="primary"
            >
              <DoDisturbIcon />
              ຍົກເລີກ
            </Button>
          </Actions>
        </Form>
      </Dialog>
    </div>
  );
};

export default Activation;
