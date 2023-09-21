"use client";

import { useRef, useCallback, Dispatch, SetStateAction, useState } from "react";
import {
  ImageInputButton,
  ImageInputPlaceholder,
  ImagePreviewer,
} from "./style";
import { useFileUploadHandler } from "@/utils/csrOnly/useFileUploadHandler";
import { PathProfile } from "@/utils/pathImages";

const AdminImageInput = (props: {
  imageState: [string | null, Dispatch<SetStateAction<string | null>>];
}) => {
  const [src, saveImage] = props.imageState;

  const [isUploaded, setIsUploaded] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const handleFileUpload = useFileUploadHandler({
    setImage: saveImage,
  });

  const toggleUpload = useCallback(() => {
    ref.current?.click();
  }, []);

  return (
    <ImageInputButton onClick={toggleUpload}>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        hidden
        name="file"
        onChange={(event) => {
          handleFileUpload(event);
          setIsUploaded(true);
        }}
      />
      {src && (
        <ImagePreviewer
          src={isUploaded ? src : PathProfile(src)}
          alt="preview"
        />
      )}
      <ImageInputPlaceholder>
        {src ? "ປ່ຽນຮູບ" : "+ ເພີ່ມຮູບ"}
      </ImageInputPlaceholder>
    </ImageInputButton>
  );
};

export default AdminImageInput;
