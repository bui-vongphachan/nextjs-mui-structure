import { ApiResponse } from "./api";
import { User } from "./user";

export interface LoginData {
  user: User;
  token: string;
}

export interface LoginResponse extends ApiResponse<LoginData> {}
