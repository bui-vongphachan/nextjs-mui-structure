import { Geometry } from "./grometry";
import { Occupation } from "./occupation";

export interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  occupation?: Occupation;
  dob: string;
  image: string;
  villageId: string;
  village: Geometry;
  province: Geometry;
  district: Geometry;
  districtId: string;
  provinceId: string;
  latitude: number;
  longitude: number;
  status: string;
  simCount: number;
  createdAt: string;
  updatedAt: string;
}
