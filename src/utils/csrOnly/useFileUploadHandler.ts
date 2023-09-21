import { Dispatch, SetStateAction, useCallback, ChangeEvent } from "react";

export const useFileUploadHandler = (props: {
  setImage: Dispatch<SetStateAction<string | null>>;
}) => {
  return useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.currentTarget.files?.[0];

      if (!file) return;

      // bigger than 1MB is not allowed
      if (file.size > 1024 * 1024) {
        return alert("File is too big!");
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        props.setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    },
    [props]
  );
};
