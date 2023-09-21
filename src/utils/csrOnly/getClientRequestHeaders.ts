import Cookies from "universal-cookie";

export const getClientRequestHeaders = () => {
  const cookies = new Cookies();

  const token = cookies.get("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};
