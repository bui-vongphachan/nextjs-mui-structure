"use client";

import AdminFormLayout from "@/components/Admin/Form";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import { LoadingOverlay } from "@/components/Core/LoadingOverlay";
import {
  FixedScreenCard,
  FixedScreenCardBody,
} from "@/components/Core/ResponsiveCard";
import { TextH4 } from "@/components/Core/Typography";
import { PATH_TO_HOME, PATH_TO_USERS_PAGE } from "@/constrains/pagePath";
import { useCallback, useRef, useState } from "react";
import { useHandlePermissionChange, useSubmitCreateAdmin } from "./hooks";
import { Form } from "./style";
import AddNewUserSuccessPage from "./success";

const AddNewOfficerPage = (props: any) => {
  const [image, setImage] = useState<string | null>(null);

  const ref = useRef<HTMLFormElement | null>(null);

  const { permissionState, handlePermissionChange } = useHandlePermissionChange(
    props.data || ""
  );

  const { isLoading, handleSubmit, data, setData } = useSubmitCreateAdmin({
    image,
  });

  const clearForm = useCallback(() => {
    ref.current?.reset();
    setImage(null);
    setData(null);
  }, [setData]);

  return (
    <FixedScreenCard fixedHeight>
      <LoadingOverlay isLoading={isLoading}>
        <div>loading</div>
      </LoadingOverlay>
      <BreadcrumbStack sx={{ mb: 1 }}>
        <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
        <BreadcrumbLink href={PATH_TO_USERS_PAGE}>ເຈົ້າໜ້າທີ່</BreadcrumbLink>/
        <BreadcrumbLink href={PATH_TO_USERS_PAGE} disabled>
          ເພີ່ມ
        </BreadcrumbLink>
      </BreadcrumbStack>
      <TextH4 sx={{ mb: 2 }}>ເພີ່ມເຈົ້າໜ້າທີ່ໃໝ່</TextH4>
      <FixedScreenCardBody
        body
        scrollable
        sx={{ bgcolor: "transparent", p: 0 }}
      >
        <Form
          ref={ref}
          onSubmit={(event) => handleSubmit(event, permissionState)}
        >
          <AdminFormLayout
            data={null}
            permissions={permissionState}
            handlePermissionChange={handlePermissionChange}
            imageState={[image, setImage]}
          />
        </Form>
      </FixedScreenCardBody>
      <AddNewUserSuccessPage
        data={data}
        setData={setData}
        image={image}
        clearForm={clearForm}
      />
    </FixedScreenCard>
  );
};

export default AddNewOfficerPage;
