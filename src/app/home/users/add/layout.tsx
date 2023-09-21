import { validateToken } from "@/utils/ssrOnly/validateToken";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { PERMISSION_CREATE_ADMIN } from "@/constrains/permissions";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";

export default async function Layout(props: any) {
  const admin = await validateToken();

  const isValid = await validatePermission(admin, PERMISSION_CREATE_ADMIN);

  if (!isValid) return <PageDeniedAlert />;
  else return props.children;
}
