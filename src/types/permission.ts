export interface PermissionItem {
  title: string;
  name: string;
  active: boolean;
}

export interface PermissionType {
  title: string;
  name: string;
  active: boolean;
  permissions: {
    title: string;
    name: string;
    active: boolean;
  }[];
}

export interface AdminPermission {
  title: string;
  value?: string;
  permissions?: AdminPermission[];
}
