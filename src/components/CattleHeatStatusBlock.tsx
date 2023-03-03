import { Cattle } from "src/types";
import { Button, CheckBox, Text, ButtonGroup } from "@ui-kitten/components";
import styled from "styled-components/native";

const StyledCard = styled.View`
  justify-content: flex-end;
  gap: 30px;
  align-items: center;
  flex-direction: row;
  z-index: 100;
  padding-vertical: 20px;
`;

const StyledButton = styled(Button)<{ isFirst?: boolean }>`
  border-top-left-radius: ${({ isFirst }) => (isFirst ? "5px" : "0")};
  border-bottom-left-radius: ${({ isFirst }) => (isFirst ? "5px" : "0")};
  border-top-right-radius: ${({ isFirst }) => (isFirst ? "0" : "5px")};
  border-bottom-right-radius: ${({ isFirst }) => (isFirst ? "0" : "5px")};
  padding-horizontal: 25px;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: 2px;
`;

type Props = {
  status: Cattle["status"];
  handleChange: (status: Cattle["status"]) => void;
  isDisabled?: boolean;
};

export const CattleHeatStatusBlock: React.FC<Props> = (props) => {
  const { status, handleChange, isDisabled } = props;

  const onChangeCheck = (status: Cattle["status"]) => {
    handleChange(status);
  };

  return (
    <StyledCard>
      <Text>Cow on heat?</Text>
      <ButtonsContainer>
        <StyledButton
          isFirst
          status={status === "NOT_ON_HEAT" ? "primary" : "basic"}
          onPress={() => onChangeCheck("NOT_ON_HEAT")}
        >
          No
        </StyledButton>
        <StyledButton
          status={status === "ON_HEAT" ? "primary" : "basic"}
          onPress={() => onChangeCheck("ON_HEAT")}
        >
          Yes
        </StyledButton>
      </ButtonsContainer>
    </StyledCard>
  );
};
