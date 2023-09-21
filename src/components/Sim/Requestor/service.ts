import { SimDetail } from "@/types/sims";

export const getImageSrc = (simOwner: SimDetail) => {
  const imageSrc = simOwner.user.image;

  if (!simOwner.sim.isAgent) return imageSrc;

  return simOwner.sim.requestedBy.image;
};

export const getName = (simOwner: SimDetail) => {
  const name = `${simOwner.user.firstName} ${simOwner.user.lastName}`;

  if (!simOwner.sim.isAgent) return name;

  return `${simOwner.sim.requestedBy.firstName} ${simOwner.sim.requestedBy.lastName}`;
};

export const getPhone = (simOwner: SimDetail) => {
  const phone = simOwner.user.phoneNumber;

  if (!simOwner.sim.isAgent) return phone;

  return simOwner.sim.requestedBy.phoneNumber;
};

export const getType = (simOwner: SimDetail) => {
  if (!simOwner.sim.isAgent) return "Customer";

  return "Agent";
};
