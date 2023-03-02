import { StatisticsData } from "src/types";
import styled from "styled-components/native";
import { StatBlock } from "./StatBlock";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-vertical: 20px;
  padding-top: 50px;
  background-color: #f7f8f9;
`;
const Divider = styled.View`
  height: 70%;
  border: 0.5px solid #d4d7da;
`;
const Container = styled.View``;

type Props = {
  heatStats: StatisticsData;
};

export const StatWrapper: React.FC<Props> = (props) => {
  const { cowsCycled, cowsNotCycled } = props.heatStats;
  return (
    <Wrapper>
      <StatBlock title="Cows cycled" data={cowsCycled} unit="20d since PSM" />
      <Divider />
      <StatBlock title="Not yet cycled" data={cowsNotCycled} unit="Cows" />
    </Wrapper>
  );
};
