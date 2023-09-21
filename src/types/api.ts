export interface Pagination<T> {
  records: 2;
  pages: 1;
  currentPage: 1;
  nextPage: 0;
  previousPage: 0;
  rows: T[];
}
export interface PaginationAGent<T> {
  records: 2;
  pages: 1;
  currentPage: 1;
  nextPage: 0;
  previousPage: 0;
  data: T[];
}

export interface ApiResponse<T> {
  success: boolean;
  status: number;
  message: string;
  error?: any;
  data: T;
}
