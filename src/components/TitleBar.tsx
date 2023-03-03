import { Text } from "@ui-kitten/components";
import { ReactNode } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 15px;
`;
const TitleText = styled(Text)`
  color: #000;
  font-size: 24px;
  font-weight: bold;
`;
type Props = {
  title: string;
  additionalInfo?: ReactNode;
};

export const TitleBar: React.FC<Props> = (props) => {
  const { title, additionalInfo } = props;
  return (
    <Container>
      <TitleText>{title}</TitleText>
      {!!additionalInfo && additionalInfo}
    </Container>
  );
};
