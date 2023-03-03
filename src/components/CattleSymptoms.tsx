import { CheckBox } from "@ui-kitten/components";
import { Symptom } from "src/types";
import styled from "styled-components/native";
import { symptomsValues } from "src/constants";

const StyledCard = styled.View`
  justify-content: flex-start;
  align-items: center;
  border: none;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 100;
  gap: 5px;
  padding-vertical: 20px;
`;

const StyledCheckBox = styled(CheckBox)`
  color: #000;
  background-color: #f0f1f3;
  border-radius: 10px;
  padding: 10px;
  fill-color: #000;
`;

type Props = {
  symptoms: Symptom[];
  handleChange: (symptoms: Symptom[]) => void;
  isDisabled?: boolean;
};

export const CattleSymptoms: React.FC<Props> = (props) => {
  const { symptoms, handleChange, isDisabled } = props;

  const onChangeCheck = (checked: boolean, symptom: Symptom) => {
    const updatedSymptoms = [...symptoms];
    if (checked) {
      !symptoms.find((item) => item === symptom) &&
        updatedSymptoms.push(symptom);
    } else {
      const indexOfitem = symptoms.indexOf(symptom);
      if (indexOfitem > -1) {
        updatedSymptoms.splice(indexOfitem, 1);
      }
    }
    handleChange(updatedSymptoms);
  };

  return (
    <StyledCard>
      {Object.keys(symptomsValues).map((symptom: string) => {
        return (
          <StyledCheckBox
            key={symptom}
            checked={!!symptoms.find((item) => item === symptom)}
            onChange={(checked) =>
              onChangeCheck(checked, symptom as keyof typeof symptomsValues)
            }
            disabled={isDisabled}
          >
            {symptomsValues[symptom as keyof typeof symptomsValues]}
          </StyledCheckBox>
        );
      })}
    </StyledCard>
  );
};
