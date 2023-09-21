import { FixedScreenCard } from "../ResponsiveCard";

const PageDeniedAlert = (props: { message?: string }) => {
  return (
    <FixedScreenCard>
      <h1 style={{ textAlign: "center" }}>
        {props.message ||
          `You do not have permission to view this page. Please contact your
          administrator.`}
      </h1>
    </FixedScreenCard>
  );
};

export default PageDeniedAlert;
