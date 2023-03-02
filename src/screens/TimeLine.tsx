import { useEffect } from "react";
import styled from "styled-components/native";
import { useAppDispatch, useAppSelector } from "src/store/store";
import { getCattles } from "src/apis/timeline";

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
const TimeLine = () => {
  const dispatch = useAppDispatch();

  const { cattleList } = useAppSelector((state) => state.timeline);

  useEffect(() => {
    dispatch(getCattles());
  }, []);
  return (
    <Container>
      {cattleList.map((cattle) => (
        <Text key={cattle.id}>{cattle.cattleName}</Text>
      ))}
    </Container>
  );
};
export default TimeLine;
