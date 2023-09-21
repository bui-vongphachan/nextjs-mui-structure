import { PaginationButton } from "./style";
import { Stack } from "@mui/system";

const PaginationController = (props: {
  path: string;
  total: number;
  limit: number;
  searchParams: any;
}) => {
  const { searchParams } = props;

  const totalPages = Math.ceil(props.total / props.limit);

  const currentPageIndex = Math.ceil((searchParams.skip || 0) / props.limit);

  const currentPage = currentPageIndex + 1;

  const isLastPage = props.total <= (searchParams.skip || 0) + props.limit;

  const isFirstPage = currentPageIndex * props.limit - props.limit < 0;

  return (
    <Stack direction="row" alignItems="center" justifyContent="flex-end">
      <Stack spacing={1} direction="row" alignItems="center">
        <PaginationButton disabled={isFirstPage} href={props.path + `?skip=0`}>
          First
        </PaginationButton>
        <PaginationButton
          disabled={isFirstPage}
          href={`${props.path}?skip=${
            (currentPage - 1) * props.limit - props.limit
          }`}
        >
          Previous
        </PaginationButton>
        {new Array(totalPages).fill(0).map((_, index) => (
          <PaginationButton
            active={1 + index == currentPage}
            key={index}
            href={`${props.path}?skip=${index * props.limit}`}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton
          href={`${props.path}?skip=${
            (currentPage - 1) * props.limit + props.limit
          }`}
          disabled={isLastPage}
        >
          Next
        </PaginationButton>
        <PaginationButton
          disabled={isLastPage}
          href={`${props.path}?skip=${(totalPages - 1) * props.limit}`}
        >
          Last
        </PaginationButton>
      </Stack>
    </Stack>
  );
};

export default PaginationController;
