import { Customer } from "./customer";
import { Provider } from "./provider";

export interface Sim {
  _id: string;
  phoneNumber: string;
  requestedBy: Customer;
  provider: Provider;
  type: string;
  status: SimStatus;
  isAgent: boolean;
  simOwner?: { user: Customer };
  idProof: SimProofIdDetail;
  createdAt: string;
  isRegistered: false;
  updatedAt: string;
  rejectRemark: string;
  __v: 0;
}

export interface SimProofIdDetail {
  _id: string;
  ID_no: string;
  personalNo: string;
  issueDate: string;
  expiryDate: string;
  createdBy: string;
  issueAuthority: string;
  type: {
    _id: string;
    name: string;
  };
  status: SimStatus;
  issueAddress: string;
  personFile: string;
  createdAt: string;
  updatedAt: string;
  idProofFiles: string[];
  facialFiles: string[];
}

export interface ProofFile {
  _id: string;
  file: string;
  idProof: string;
  createdAt: string;
  updatedAt: string;
}

export interface SimProofDetail {
  _id: string;
  type: DocumentType;
  ID_no: string;
  personalNo: string;
  issueDate: string;
  expiryDate: string;
  createdBy: string;
  issueAuthority: null;
  status: SimStatus;
  issueAddress: string;
  personFile: string;
  createdAt: string;
  updatedAt: string;
  idProofFiles: ProofFile[];
  facialFiles: ProofFile[];
}

export interface SimDetail {
  _id: string;
  sim: Sim;
  user: Customer;
  count: number;
  isActive: boolean;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum SimStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  INITIATED = "INITIATED",
}
