import { SectionTitle, Text } from "@/components/Core/Typography";
import { Box, Stack } from "@mui/system";
import Image from "next/image";

const Provider = (props: { provider: any }) => {
  const { provider } = props;

  if (typeof provider === "string") return <div />;

  if (typeof provider === "undefined") return <div />;

  if (provider === null) return <div />;

  return (
    <Box>
      <SectionTitle>ຂໍ້ມູນຜູ້ໃຫ້ບໍລິການ</SectionTitle>
      <Stack direction="row">
        <Image
          src="/LTC.png"
          width={128}
          height={128}
          alt="LTC"
          style={{
            borderRadius: "50%",
            objectFit: "scale-down",
          }}
        />
        <Text>{provider.name}</Text>
      </Stack>
    </Box>
  );
};

export default Provider;
