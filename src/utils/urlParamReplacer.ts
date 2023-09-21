export const injectIdToPagePath = (url: string, id: string) => {
  return url.replace(/\[id\]/g, id);
};
