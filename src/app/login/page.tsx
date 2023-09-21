import { DefaultPageProps, ServerPageProps } from "@/types/page";
import Image from "next/image";
import FormContainer from "./form";
import { CreditBox, LogoContainer, Title, Container } from "./style";

const LoginPage = (props: ServerPageProps<DefaultPageProps>) => {
  return (
    <Container>
      <LogoContainer>
        <Image
          priority
          width={85 * 2}
          height={80 * 2}
          src="/3grab-logo.png"
          alt="3 grab logo"
        />
      </LogoContainer>
      <Title>ລະບົບຄຸ້ມຄອງຂຶ້ນທະບຽນເບີ</Title>
      <FormContainer {...props} />
      <CreditBox>{"© ສະຫງວນລິຂະສິດ  ກຸ່ມບໍລິສັດ AIF @2023"}</CreditBox>
    </Container>
  );
};

export default LoginPage;
