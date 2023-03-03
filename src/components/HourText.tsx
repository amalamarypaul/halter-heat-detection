import { Text } from "@ui-kitten/components";
import dayjs from "dayjs";
import styled from "styled-components/native";

const getTimeElapsed = (timestamp: Date) => {
  // Calculate the time difference between the input and now
  const now = dayjs();
  return now.diff(dayjs(timestamp), "h");
};

const StyledText = styled(Text)`
  font-weight: bold;
`;

type Props = { date: Date };

export const HourText: React.FC<Props> = (props) => {
  const { date } = props;
  const timeElapased = getTimeElapsed(date);
  const hourText = `${timeElapased}h`;
  return (
    <StyledText status={timeElapased > 24 ? "danger" : "basic"}>
      {hourText}
    </StyledText>
  );
};
