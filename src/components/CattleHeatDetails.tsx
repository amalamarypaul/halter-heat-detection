import { useRef } from "react";
import styled from "styled-components/native";
import { Button, Text } from "@ui-kitten/components";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { RootState, useAppSelector, useAppDispatch } from "src/store/store";
import { selectCow } from "src/store/timelineSlice";

type Props = {};

const StyledButton = styled(Button)`
  background-color: #000;
  border-color: #000;
  border-radius: 10px;
`;
const Container = styled.View`
  padding: 20px;
  z-index: 100;
`;

export const CattleHeatDetails: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const selectedCow = useAppSelector(
    (state: RootState) => state.timeline.selectedCow
  );
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = ["50%"];

  const onCloseBottomSheet = () => {
    dispatch(selectCow(null));
  };
  const handleDone = () => {
    dispatch(selectCow(null));
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
          <Text>Awesome 🔥 {selectedCow?.cattleName || ""}</Text>
          <StyledButton onPress={handleDone}>Done</StyledButton>
        </Container>
      </BottomSheetView>
    </BottomSheet>
  );
};
