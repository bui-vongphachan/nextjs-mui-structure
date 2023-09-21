import EditAdminForm from "./form";
import { PERMISSION_UPDATE_ADMIN_DETAIL } from "@/constrains/permissions";
import { validatePermission } from "@/utils/ssrOnly/validatePermission";
import { validateToken } from "@/utils/ssrOnly/validateToken";
import PageDeniedAlert from "@/components/Core/PageDeniedAlert";
import { getAdminDetail } from "@/services/getAdminDetail";

const UserDetailPage = async (props: any) => {
  const admin = await validateToken();

  const isValid = await validatePermission(
    admin,
    PERMISSION_UPDATE_ADMIN_DETAIL
  );

  if (!isValid) return <PageDeniedAlert />;
  else {
    const user = await getAdminDetail(props.params.id);

    if (!user) return <PageDeniedAlert message="ບໍ່ພົບຂໍ້ມູນໝາຍເລກໂທລະສັບ" />;

    return <EditAdminForm data={user} />;
  }
};

export default UserDetailPage;
