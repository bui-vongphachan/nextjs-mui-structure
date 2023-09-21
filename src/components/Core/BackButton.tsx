"use client";

import { Button } from "@/components/Core/Button";
import { useRouter } from "next/navigation";

const BackButton = (props: { children?: React.ReactNode }) => {
  const router = useRouter();

  return (
    <Button type="button" variant="outlined" onClick={() => router.back()}>
      {props.children}
    </Button>
  );
};

export default BackButton;
