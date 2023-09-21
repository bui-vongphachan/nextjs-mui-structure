import { Box } from "@mui/system";
import { Container } from "./style";

const AvatarDescription = (props: {
  title: string;
  description: string;
  label: React.ReactNode;
}) => {
  return (
    <Container>
      <h3>{props.title}</h3>
      <h4>{props.description}</h4>
      <Box sx={{ mt: 0.5 }}>{props.label}</Box>
    </Container>
  );
};

export default AvatarDescription;
