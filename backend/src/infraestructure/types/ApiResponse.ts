export interface ApiError {
  field?: string;
  message: string;
}

export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data?: T;
  errors?: ApiError[];
}

export interface PaginatedData<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type PaginatedApiResponse<T = any> = ApiResponse<PaginatedData<T>>;
