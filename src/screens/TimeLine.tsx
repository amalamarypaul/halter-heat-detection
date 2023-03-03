import { useEffect } from "react";
import styled from "styled-components/native";
import { useAppDispatch, useAppSelector } from "src/store/store";
import { getCattles, getCattlesStats } from "src/apis/timeline";
import { useCattleGrouping } from "src/hooks";
import dayjs from "dayjs";
import { HeatBlock, StatWrapper, CattleHeatDetails } from "src/components";
import { Spinner } from "@ui-kitten/components";

const Container = styled.ScrollView<{ $shouldBlur?: boolean }>`
  background-color: #fff;
  padding: 10px;
  opacity: ${(props) => (props.$shouldBlur ? 0.8 : 1)};
  z-index: -10;
`;
const Overlay = styled.View`
  background-color: rgba(0,0,0,0.4)
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0px;
  left: 0px;
  position: absolute;
`;
const SpinnerWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 50%;
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

const TimeLine = () => {
  const dispatch = useAppDispatch();

  const { statsData, selectedCow, loading } = useAppSelector(
    (state) => state.timeline
  );

  const { dateBasedGrouping, unconfirmedCattles } = useCattleGrouping();

  const dates = Object.keys(dateBasedGrouping).sort((a, b) =>
    dayjs(b).diff(dayjs(a))
  );

  useEffect(() => {
    dispatch(getCattles());
    dispatch(getCattlesStats());
  }, []);
  if (loading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  } else {
    return (
      <>
        <Container $shouldBlur={!!selectedCow}>
          <StatWrapper heatStats={statsData} />
          <HeatBlock cattles={unconfirmedCattles} label="Unconfirmed heat" />

          {dates.map((date) => {
            return (
              <HeatBlock
                key={date}
                cattles={dateBasedGrouping[date]}
                label={getDateLabel(date)}
              />
            );
          })}
        </Container>
        {!!selectedCow && <CattleHeatDetails />}
        {!!selectedCow && <Overlay />}
      </>
    );
  }
};
export default TimeLine;
