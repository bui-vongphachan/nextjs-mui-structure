// ADMIN
export const PERMISSION_VIEW_ADMINS = "PERMISSION_VIEW_ADMINS";
export const PERMISSION_CREATE_ADMIN = "PERMISSION_CREATE_ADMIN";
export const PERMISSION_VIEW_ADMIN_DETAIL = "PERMISSION_VIEW_ADMIN_DETAIL";
export const PERMISSION_UPDATE_ADMIN_DETAIL = "PERMISSION_UPDATE_ADMIN_DETAIL";
export const PERMISSION_DELETE_ADMIN = "PERMISSION_DELETE_ADMIN";
export const PERMISSION_UPDATE_ADMIN_PERMISSION =
  "PERMISSION_UPDATE_ADMIN_PERMISSION";

// PROVIDER
export const PERMISSION_VIEW_PROVIDERS = "PERMISSION_VIEW_PROVIDERS";
export const PERMISSION_CREATE_PROVIDER = "PERMISSION_CREATE_PROVIDER";
export const PERMISSION_VIEW_PROVIDER_DETAIL =
  "PERMISSION_VIEW_PROVIDER_DETAIL";
export const PERMISSION_UPDATE_PROVIDER = "PERMISSION_UPDATE_PROVIDER";
export const PERMISSION_DELETE_PROVIDER = "PERMISSION_DELETE_PROVIDER";
export const PERMISSION_VIEW_PROVIDER_ADMIN = "PERMISSION_VIEW_PROVIDER_ADMIN";
export const PERMISSION_ADD_PROVIDER_ADMIN = "PERMISSION_ADD_PROVIDER_ADMIN";
export const PERMISSION_VIEW_PROVIDER_AGENTS =
  "PERMISSION_VIEW_PROVIDER_AGENTS";
export const PERMISSION_VIEW_PROVIDER_CUSTOMERS =
  "PERMISSION_VIEW_PROVIDER_CUSTOMERS";

// AGENT
export const PERMISSION_VIEW_AGENTS = "PERMISSION_VIEW_AGENTS";
export const PERMISSION_VIEW_AGENT_DETAIL = "PERMISSION_VIEW_AGENT_DETAIL";
export const PERMISSION_CREATE_AGENT = "PERMISSION_CREATE_AGENT";
export const PERMISSION_UPDATE_AGENT_DETAIL = "PERMISSION_UPDATE_AGENT_DETAIL";

// CUSTOMER
export const PERMISSION_VIEW_CUSTOMERS = "PERMISSION_VIEW_CUSTOMERS";
export const PERMISSION_VIEW_CUSTOMER_DETAIL =
  "PERMISSION_VIEW_CUSTOMER_DETAIL";

// SIM REGISTRATION
export const PERMISSION_VIEW_SIM_REGISTRATIONS =
  "PERMISSION_VIEW_SIM_REGISTRATIONS";
export const PERMISSION_VIEW_SIM_REGISTRATION_DETAIL =
  "PERMISSION_VIEW_SIM_REGISTRATION_DETAIL";
export const PERMISSION_REVIEW_SIM_REGISTRATION =
  "PERMISSION_REVIEW_SIM_REGISTRATION";

// DASHBOARD
export const PERMISSION_VIEW_DASHBOARD = "PERMISSION_VIEW_DASHBOARD";

export const DashboardPermissions = [
  {
    title: "ເຂົ້າຊົມ",
    value: PERMISSION_VIEW_DASHBOARD,
  },
];

const SimRequestPermissions = [
  {
    title: "ເຂົ້າຊົມລາຍການທັງໝົດ",
    value: PERMISSION_VIEW_SIM_REGISTRATIONS,
  },
  {
    title: "ເຂົ້າຊົມລາຍລະອຽດ",
    value: PERMISSION_VIEW_SIM_REGISTRATION_DETAIL,
  },
  {
    title: "ປະຕິເສດ ແລະ ອະນຸມັດ",
    value: PERMISSION_REVIEW_SIM_REGISTRATION,
  },
];

const CustomerPermissions = [
  {
    title: "ເບິ່ງລາຍການຜູ້ໃຊ້ງານເບີ",
    value: PERMISSION_VIEW_CUSTOMERS,
  },
  {
    title: "ເບິ່ງລາຍລະອຽດຜູ້ໃຊ້ງານເບີ",
    value: PERMISSION_VIEW_CUSTOMER_DETAIL,
  },
];

const AgentPermissions = [
  {
    title: "ເພີ່ມ",
    value: PERMISSION_CREATE_AGENT,
  },
  {
    title: "ເບິ່ງລາຍການ",
    value: PERMISSION_VIEW_AGENTS,
  },
  {
    title: "ເບິ່ງລາຍລະອຽດ",
    value: PERMISSION_VIEW_AGENT_DETAIL,
  },
  {
    title: "ແກ້ໄຂ",
    value: PERMISSION_UPDATE_AGENT_DETAIL,
  },
];

const AdminPermissions = [
  {
    title: "ລາຍການເຈົ້າໜ້າທີ່",
    value: PERMISSION_VIEW_ADMINS,
  },
  {
    title: "ເບິ່ງລະອຽດ",
    value: PERMISSION_VIEW_ADMIN_DETAIL,
  },
  {
    title: "ສ້າງ",
    value: PERMISSION_CREATE_ADMIN,
  },
  {
    title: "ແກ້ໄຂ",
    value: PERMISSION_UPDATE_ADMIN_DETAIL,
  },
];

export const permissionFormValue = [
  {
    title: "ໜ້າຫຼັກ",
    permissions: DashboardPermissions,
  },
  {
    title: "ການລົງທະບຽນເບີໂທ",
    permissions: SimRequestPermissions,
  },
  {
    title: "ຈັດການບັນຊີຜູ້ໃຊ້ງານເບີ",
    permissions: CustomerPermissions,
  },
  {
    title: "ຈັດການຕົວແທນຜູ້ໃຊ້ງານເບີ",
    permissions: AgentPermissions,
  },
  {
    title: "ຈັດການຜູ້ໃຊ້ງານ",
    permissions: AdminPermissions,
  },
];
