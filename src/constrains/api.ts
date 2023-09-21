export const API_GET_AGENTS = "/api/v1/agents/provider/[id]";
export const API_GET_AGENT_PHONE_NUMBERS = "/api/v1/agents/customer/phone/";
export const API_CREATE_AGENTS = "/api/v1/agents";
export const API_DISABLE_AGENTS = "/api/v1/agents/disable-agent/";
export const API_ENABLE_AGENTS = "/api/v1/agents/enable-agent/";
export const API_GET_PROVIDERS = "/api/v1/providers";
export const API_GET_PROVIDER_DETAIL = "/api/v1/providers/";
export const API_CREATE_PROVIDERS = "/api/v1/providers";
export const API_UPDATE_PROVIDER = "/api/v1/providers/";
export const API_LOGIN = "/api/v1/admin/login";
export const API_VALIDATE_TOKEN = "/api/v1/verify-token";
export const API_GET_CUSTOMERS_PHONE_NUMBERS = "/api/v1/sim-owner/";

// Admin
export const API_UPDATE_ADMIN = "/api/v1/admins/[id]";
export const API_CREATE_ADMINS = "/api/v1/admins";
export const API_GET_ADMINS = "/api/v1/admins";
export const API_CHANGE_ADMIN_PASSWORD = "/api/v1/admin/change-password";

// Agent
export const API_GET_AGENT_DETAIL = "/api/v1/agents/[id]";
export const API_GET_CUSTOMER_PHONE_NUMBERS = "/api/v1/users/phone-number/";
export const API_DEACTIVE_AGENT = "/api/v1/agents/disable-agent/[id]";
export const API_ACTIVE_AGENT = "/api/v1/agents/enable-agent/[id]";
export const API_CHECK_EXISTING_AGENT =
  "/api/v1/agents/checkuser-add-to-agent/[id]";
export const API_GET_AGENT_DETAIL_BY_USER_ID = "/api/v1/agents/customer/[id]";

// Assets
export const PATH_FOR_CUSTOMER_IMAGE = "/storages/uploads/person/";

// Customer
export const API_GET_CUSTOMER_DETAIL = "/api/v1/users/[id]";
export const API_GET_CUSTOMERS = "/api/v1/users";
export const API_GET_CUSTOMERS_BY_PROVIDER = "/api/v1/sim-owner/provider/[id]";

// Sim
export const API_GET_SIMS = "/api/v1/sim";
export const API_GET_CUSTOMERS_SIMS = "/api/v1/sim-owner/user/[id]";
export const API_GET_PROVINCES = "/api/v1/provinces";

// sim request
export const API_GET_SIM_REQUESTS = "/api/v1/sim";
export const API_GET_SIM_OWNER_DETAIL = "/api/v1/sim-owner/detail";
export const API_GET_ID_PROOF = "/api/v1/id-proof/[id]";
export const API_GET_LASTEST_USER_PROOF = "/api/v1/id-proof/current/[id]";
export const API_GET_SIM_REQUEST_DETAIL = "/api/v1/sim/";
export const API_PATCH_SIM_REJECT_ID = "/api/v1/sim/reject-sim/";
export const API_PATCH_SIM_APPROVE_ID = "/api/v1/sim/approve-sim/";
export const API_PROOF_ID_SIM_REQUEST = "/api/v1/id-proof/";
export const API_UPDATE_SIM_REQUEST = "/api/v1/sim-owner/[id]";

// Image
export const API_UPDATE_PROFILE_IMAGE = "/api/v1/storages/profile?file";

// Dashboard
export const API_GET_DASHBOARD_PRIMARY_SUMMARY =
  "/api/v1/users/overall_by_provider/[id]";
export const API_GET_DASHBOARD_SECONDARY_SUMMARY =
  "/api/v1/providers/overview/[id]";
