import { useRef, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Button, CheckBox, Text } from "@ui-kitten/components";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { RootState, useAppSelector, useAppDispatch } from "src/store/store";
import { finishLoading, selectCow, updateCow } from "src/store/timelineSlice";
import { Cattle, Symptom } from "src/types";
import { CattleSymptoms } from "./CattleSymptoms";
import { CattleHeatStatusBlock } from "./CattleHeatStatusBlock";
import { TitleBar } from "./TitleBar";
import { HourText } from "./HourText";

type Props = {};

const StyledButton = styled(Button)`
  background-color: #000;
  border-color: #000;
  border-radius: 10px;
`;
const StyledCheckBox = styled(CheckBox)`
  color: #000;
`;
const Container = styled.View`
  padding: 20px;
  z-index: 100;
`;
const Divider = styled.View`
  width: 100%;
  border: 0.5px solid #d4d7da;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const BasicText = styled(Text)`
  color: #abadb0;
`;

export const CattleHeatDetails: React.FC<Props> = (props) => {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [status, setStatus] = useState<Cattle["status"]>("DETECTED");
  const dispatch = useAppDispatch();
  const selectedCow = useAppSelector(
    (state: RootState) => state.timeline.selectedCow
  );

  useEffect(() => {
    if (selectedCow) {
      setSymptoms(selectedCow.symptoms);
      setStatus(selectedCow.status);
    }
  }, [selectedCow]);
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = ["60%"];

  const onCloseBottomSheet = () => {
    dispatch(selectCow(null));
  };
  const handleDone = () => {
    if (selectedCow) {
      const updatedCattle = { ...selectedCow, symptoms, status };
      dispatch(updateCow(updatedCattle));

      setTimeout(() => {
        dispatch(finishLoading());
      }, 200);
    }
  };
  const handleChangeSymptoms = (symptoms: Symptom[]) => {
    setSymptoms(symptoms);
  };
  const handleChangeStatus = (status: Cattle["status"]) => {
    setStatus(status);
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={onCloseBottomSheet}
      enableHandlePanningGesture={true}
    >
      <BottomSheetView>
        <Container>
          {selectedCow && (
            <>
              <TitleBar
                title={`Cow ${selectedCow.cattleName || ""}`}
                additionalInfo={
                  <Text>
                    <BasicText> First detected </BasicText>
                    <HourText date={selectedCow.firstDetectedAt} />
                    {""} ago
                  </Text>
                }
              />
              <CattleSymptoms
                symptoms={symptoms}
                handleChange={handleChangeSymptoms}
              />

              <Divider />
              <CattleHeatStatusBlock
                status={status}
                handleChange={handleChangeStatus}
              />

              <Divider />
            </>
          )}

          <StyledButton onPress={handleDone}>Done</StyledButton>
        </Container>
      </BottomSheetView>
    </BottomSheet>
  );
};
