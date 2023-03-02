import { Text } from "@ui-kitten/components";
import dayjs from "dayjs";

const getTimeElapsed = (timestamp: Date) => {
  // Calculate the time difference between the input and now
  const now = dayjs();
  return now.diff(dayjs(timestamp), "h");
};

type Props = { date: Date };

export const HourText: React.FC<Props> = (props) => {
  const { date } = props;
  const timeElapased = getTimeElapsed(date);
  const hourText = `${timeElapased}h`;
  return (
    <Text status={timeElapased > 24 ? "danger" : "basic"}>{hourText}</Text>
  );
};
