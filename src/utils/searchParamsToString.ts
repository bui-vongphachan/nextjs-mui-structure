export const searchParamsToString = (searchParams: any) => {
  let URL = "?";

  for (const key in searchParams) {
    URL += `${key}=${searchParams[key]}&`;
  }

  if (!URL.includes("limit")) URL += `limit=20&`;
  if (!URL.includes("skip")) URL += `skip=0&`;

  return URL;
};
