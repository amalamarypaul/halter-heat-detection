//Item which shows the cattle heat status

import { Card, Icon, Text } from "@ui-kitten/components";
import { Cattle } from "src/types";

type Props = {
  cattle: Cattle;
};

const getTimeElapsed = (timestamp: Date) => {
  // TODO Calculate the time difference between the input and now
  return "12h";
};

const iconMap = {
  ON_HEAT: "checkmark-outline",
  NOT_ON_HEAT: "close-outline",
};

export const HeatItem: React.FC<Props> = (props) => {
  const { cattle } = props;
  const { cattleName, firstDetectedAt, status } = cattle;
  return (
    <Card>
      <Text>{cattleName}</Text>
      {status === "DETECTED" ? (
        <Text>{getTimeElapsed(firstDetectedAt)}</Text>
      ) : (
        <Icon
          style={{ width: 20, height: 20 }}
          fill="#000"
          name={iconMap[status]}
        />
      )}
    </Card>
  );
};
