import { Admin } from "./admin";
import { Customer } from "./customer";

export interface Agent {
  _id: string;
  name: string;
  user: Customer;
  userDetails: Customer;
  adminDetails: Admin;
  status: string;
  createdById: string;
  userId: string;
  isActive: boolean;
}
