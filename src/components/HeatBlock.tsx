import { Divider, Layout, Text } from "@ui-kitten/components";
import { CattleList } from "src/types";
import styled from "styled-components/native";
import { HeatItem } from "./HeatItem";

const Container = styled(Layout)`
  padding-top: 20px;
`;

const ItemsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  padding-vertical: 20px;
`;

type Props = {
  label: string;
  cattles: CattleList;
};

export const HeatBlock: React.FC<Props> = (props) => {
  const { label, cattles } = props;
  return (
    <Container>
      <Text>{label}</Text>
      <ItemsContainer>
        {cattles.map((cattle) => (
          <HeatItem cattle={cattle} key={cattle.id} />
        ))}
      </ItemsContainer>
      <Divider />
    </Container>
  );
};
