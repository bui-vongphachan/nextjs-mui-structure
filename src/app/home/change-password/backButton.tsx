"use client";

import { Button } from "@/components/Core/Button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <Button type="button" scale="small" color="gray" onClick={goBack}>
      ຍົກເລີກ
    </Button>
  );
};

export default BackButton;
