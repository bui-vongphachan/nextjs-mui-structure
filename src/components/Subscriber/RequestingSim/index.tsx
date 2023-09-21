import { Sim } from "@/types/sims";
import { PathProfile } from "@/utils/pathImages";
import Image from "next/image";
import { Container, Status } from "./style";

const SubscriberRequestingSim = (props: { sim: Sim }) => {
  if (!props.sim.provider) return <h3>No data found</h3>;

  const { image: providerImage } = props.sim.provider;

  return (
    <Container>
      <div>
        <Image
          src={PathProfile(providerImage)}
          fill
          alt="requestor profile image"
          sizes="40px"
        />
      </div>
      <div>
        <div>
          <h2>{props.sim.phoneNumber}</h2>
          <Status
            color={(() => {
              if (props.sim.status === "PENDING") return "warning";
              if (props.sim.status === "REJECTED") return "danger";
              return "success";
            })()}
          >
            {props.sim.status}
          </Status>
        </div>
        <div>
          <div>{props.sim.provider.name}</div>
          <div>|</div>
          <div>{props.sim.isRegistered ? "ເພີ່ມເບີໃໝ່" : "ລົງໃທະບຽນໃໝ່"}</div>
          <div>|</div>
          <div>{new Date(props.sim.createdAt).toLocaleString("en-GB")}</div>
        </div>
      </div>
    </Container>
  );
};

export default SubscriberRequestingSim;
