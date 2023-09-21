"use client";

import { Button } from "@/components/Core/Button";
import { SectionTitle } from "@/components/Core/Typography";
import { Agent } from "@/types/agent";
import { Modal } from "@mui/material";
import { useCallback, useState, Fragment } from "react";
import { useDisableAgent } from "./hooks";
import { Form } from "./style";

const DisableAgentForm = (props: { agent: Agent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  const { isLoading, action } = useDisableAgent({
    modalClose: toggleModal,
    agent: props.agent,
  });

  return (
    <Fragment>
      <Modal open={isOpen}>
        <Fragment>
          <Form onSubmit={action}>
            <SectionTitle>
              ທ່ານຕ້ອງການປິດການໃຊ້ງານຕົວແທນຄົນນີ້ແທ້ບໍ່?
            </SectionTitle>
            <div>
              <Button
                disabled={isLoading}
                type="submit"
                scale="small"
                variant="contained"
              >
                ຢືນຢັນ
              </Button>
              <Button
                disabled={isLoading}
                type="button"
                scale="small"
                variant="outlined"
                onClick={toggleModal}
              >
                ຍົກເລີກ
              </Button>
            </div>
          </Form>
        </Fragment>
      </Modal>
      <Button
        onClick={toggleModal}
        type="button"
        variant="contained"
        color={props.agent.isActive ? "danger" : "primary"}
      >
        {props.agent.isActive ? "ປິດການໃຊ້ງານ" : "ເປີດການໃຊ້ງານ"}
      </Button>
    </Fragment>
  );
};

export default DisableAgentForm;
