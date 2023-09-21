import MagnifierIcon from "@/assets/svgs/magnifier";
import { Button } from "@/components/Core/Button";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/system";
import { submitSearchInput } from "./service";
import { Form, PaginationSearchInput, SearchFormContainer } from "./style";

const PaginationSearchBox = (props: {
  placeholder?: string;
  defaultValue?: string;
  path: string;
  button?: boolean;
  inputSx?: SxProps<Theme>;
}) => {
  return (
    <Form action={submitSearchInput} button={props.button}>
      <SearchFormContainer>
        <MagnifierIcon />
        <PaginationSearchInput
          sx={props.inputSx}
          name="search"
          placeholder={props.placeholder || "ຄົ້ນຫາຊື່"}
          defaultValue={props.defaultValue || ""}
        />
        <input type="submit" name="url" value={props.path} hidden />
      </SearchFormContainer>
      {props.button && (
        <Button variant="contained" name="url" value={props.path} type="submit">
          ຄົ້ນຫາ
        </Button>
      )}
    </Form>
  );
};

export default PaginationSearchBox;
