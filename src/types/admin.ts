import { Provider } from "./provider";

export interface Admin {
  _id: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  provider: Provider;
  permission: string[];
  image: string;
  password?: string;
  isActive: boolean;
}
