//Item which shows the cattle heat status

import { Card, Icon, Text } from "@ui-kitten/components";
import { Cattle } from "src/types";
import { HourText } from "./HourText";
import styled from "styled-components/native";

const StyledCard = styled.View`
  width: 65px;
  height: 65px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #f0f1f3;
`;

const CattleName = styled(Text)`
  font-weight: bold;
  text-align: center;
`;

type Props = {
  cattle: Cattle;
};

const iconMap = {
  ON_HEAT: "checkmark-outline",
  NOT_ON_HEAT: "close-outline",
};

export const HeatItem: React.FC<Props> = (props) => {
  const { cattle } = props;
  const { cattleName, firstDetectedAt, status } = cattle;
  return (
    <StyledCard>
      <CattleName>{cattleName}</CattleName>
      {status === "DETECTED" ? (
        <HourText date={firstDetectedAt} />
      ) : (
        <Icon
          style={{ width: 20, height: 20 }}
          fill="#000"
          name={iconMap[status]}
        />
      )}
    </StyledCard>
  );
};
