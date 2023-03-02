import { useEffect } from "react";
import styled from "styled-components/native";
import { Layout, Card, Text } from "@ui-kitten/components";
import { useAppDispatch, useAppSelector } from "src/store/store";
import { getCattles } from "src/apis/timeline";
import { HeatItem } from "src/components";
import { useCattleGrouping } from "src/hooks";
import dayjs from "dayjs";

const Container = styled(Layout)`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
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
      {unconfirmedCattles.map((cattle) => (
        <HeatItem cattle={cattle} key={cattle.id} />
      ))}

      {dates.map((date) => {
        return (
          <Layout>
            <Text>{getDateLabel(date)}</Text>
            {dateBasedGrouping[date].map((cattle) => (
              <HeatItem cattle={cattle} key={cattle.id} />
            ))}
          </Layout>
        );
      })}
    </Container>
  );
};
export default TimeLine;
