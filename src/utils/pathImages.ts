const PATH_URL =
  process.env.BACKEND_HOST || process.env.NEXT_PUBLIC_BACKEND_HOST;

const fallback = "/fallback.jpeg";

export const PathProfile = (image: string) => {
  if (!image) return fallback;
  else return `${PATH_URL}/storages/uploads/profile/${image}`;
};

export const PathPerson = (image: string) => {
  if (!image) return fallback;
  else return `${PATH_URL}/storages/uploads/person/${image}`;
};

export const PathFacial = (image: string) => {
  if (!image) return fallback;
  else return `${PATH_URL}/storages/uploads/facial/${image}`;
};

export const PathProofId = (image: string) => {
  if (!image) return fallback;
  else return `${PATH_URL}/storages/uploads/proof-ids/${image}`;
};
