import { Text } from "@ui-kitten/components";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
  gap: 8px;
`;
const UnitText = styled(Text)`
  color: #abadb0;
`;
const DataText = styled(Text)`
  color: #000;
  font-weight: bold;
  font-size: 40px;
`;
const TitleText = styled(Text)`
  color: #141517;
  font-size: 20px;
`;
type Props = {
  title: string;
  data: string | number | null;
  unit: string;
};

export const StatBlock: React.FC<Props> = (props) => {
  const { title, data, unit } = props;
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <DataText>{data || ""}</DataText>
      <UnitText>{unit}</UnitText>
    </Container>
  );
};
