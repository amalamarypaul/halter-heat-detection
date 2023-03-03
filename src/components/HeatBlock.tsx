import { Divider, Icon, Layout, Text } from "@ui-kitten/components";
import { CattleList } from "src/types";
import styled from "styled-components/native";
import { HeatItem } from "./HeatItem";

const EmptyContainer = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;

const EmptyMessage: React.FC = () => (
  <EmptyContainer>
    <Icon
      name="checkmark-circle-2-outline"
      fill="#5ffc99"
      style={{ width: 20, height: 20 }}
    />
    <Text appearance="hint">Nothing to take care of here!</Text>
  </EmptyContainer>
);

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
        {cattles.length ? (
          cattles.map((cattle) => <HeatItem cattle={cattle} key={cattle.id} />)
        ) : (
          <EmptyMessage />
        )}
      </ItemsContainer>
      <Divider />
    </Container>
  );
};
