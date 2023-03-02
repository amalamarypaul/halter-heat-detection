import { useEffect } from "react";
import styled from "styled-components/native";
import { Layout, Card, Text } from "@ui-kitten/components";
import { useAppDispatch, useAppSelector } from "src/store/store";
import { getCattles } from "src/apis/timeline";
import { HeatItem } from "src/components";
import { useCattleGrouping } from "src/hooks";
import dayjs from "dayjs";
import { HeatBlock } from "src/components/HeatBlock";
import { ScrollView } from "react-native";

const Container = styled.ScrollView`
  background-color: white;
  padding: 10px;
`;

const getDateLabel = (date: string) => {
  const today = dayjs();
  const incomingDate = dayjs(date);
  if (incomingDate.isSame(today, "date")) {
    return "Today";
  }
  const yesterday = dayjs().subtract(1, "day");
  if (incomingDate.isSame(yesterday, "date")) {
    return "Yesterday";
  }
  return incomingDate.format("ddd, DD MMM");
};

const CattleCard = styled(Card)``;
const TimeLine = () => {
  const dispatch = useAppDispatch();

  const { cattleList } = useAppSelector((state) => state.timeline);

  const { dateBasedGrouping, unconfirmedCattles } = useCattleGrouping();

  const dates = Object.keys(dateBasedGrouping).sort((a, b) =>
    dayjs(b).diff(dayjs(a))
  );

  useEffect(() => {
    dispatch(getCattles());
  }, []);
  return (
    <Container>
      <HeatBlock cattles={unconfirmedCattles} label="Unconfirmed heat" />

      {dates.map((date) => {
        return (
          <HeatBlock
            cattles={dateBasedGrouping[date]}
            label={getDateLabel(date)}
          />
        );
      })}
    </Container>
  );
};
export default TimeLine;
