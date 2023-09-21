export interface User {
  _id: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  providerId: null | string;
  provider: string;
  permission: string[];
  email: string;
  image: string;
  isActive: boolean;
  status: string;
  createdAt: string;
}
