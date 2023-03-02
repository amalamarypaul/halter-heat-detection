import { useEffect } from "react";
import styled from "styled-components/native";
import { Layout, Card, Text } from "@ui-kitten/components";
import { useAppDispatch, useAppSelector } from "src/store/store";
import { getCattles } from "src/apis/timeline";

const Container = styled(Layout)`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;
const CattleCard = styled(Card)``;
const TimeLine = () => {
  const dispatch = useAppDispatch();

  const { cattleList } = useAppSelector((state) => state.timeline);

  useEffect(() => {
    dispatch(getCattles());
  }, []);
  return (
    <Container>
      {cattleList.map((cattle) => (
        <CattleCard key={cattle.id}>
          <Text>{cattle.cattleName}</Text>
          <Text>{cattle.status}</Text>
        </CattleCard>
      ))}
    </Container>
  );
};
export default TimeLine;
