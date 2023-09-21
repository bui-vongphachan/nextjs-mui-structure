"use client";

import AdminFormLayout from "@/components/Admin/Form";
import { BreadcrumbLink, BreadcrumbStack } from "@/components/Core/Breadcrumb";
import { LoadingOverlay, Spinner } from "@/components/Core/LoadingOverlay";
import {
  FixedScreenCard,
  FixedScreenCardBody,
} from "@/components/Core/ResponsiveCard";
import { TextH4 } from "@/components/Core/Typography";
import { PATH_TO_HOME, PATH_TO_USERS_PAGE } from "@/constrains/pagePath";
import { Admin } from "@/types/admin";
import { useState } from "react";
import { useHandlePermissionChange, useSubmitEditAdmin } from "./hooks";
import { Form } from "./style";

const EditAdminForm = (props: { data: Admin }) => {
  const [image, setImage] = useState<string | null>(props.data.image);

  const { permissionState, handlePermissionChange } = useHandlePermissionChange(
    props.data
  );

  const { isLoading, handleSubmit } = useSubmitEditAdmin({
    data: props.data,
    image,
  });

  return (
    <FixedScreenCard fixedHeight>
      <LoadingOverlay isLoading={isLoading}>
        <Spinner />
      </LoadingOverlay>
      <BreadcrumbStack sx={{ mb: 1 }}>
        <BreadcrumbLink href={PATH_TO_HOME}>ໜ້າຫຼັກ</BreadcrumbLink>/
        <BreadcrumbLink href={PATH_TO_USERS_PAGE}>ເຈົ້າໜ້າທີ່</BreadcrumbLink>/
        <BreadcrumbLink href={PATH_TO_USERS_PAGE} disabled>
          ແກ້ໄຂ
        </BreadcrumbLink>
      </BreadcrumbStack>
      <TextH4 sx={{ mb: 2 }}>ແກ້ໄຂຂໍ້ມູນເຈົ້າໜ້າທີ່</TextH4>
      <FixedScreenCardBody
        body
        scrollable
        sx={{ bgcolor: "transparent", p: 0 }}
      >
        <Form onSubmit={(event) => handleSubmit(event, permissionState)}>
          <AdminFormLayout
            isEdit
            data={props.data}
            permissions={permissionState}
            handlePermissionChange={handlePermissionChange}
            imageState={[image, setImage]}
          />
        </Form>
      </FixedScreenCardBody>
    </FixedScreenCard>
  );
};

export default EditAdminForm;
