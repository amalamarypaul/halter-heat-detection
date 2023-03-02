import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
const TimeLine = () => {
  return (
    <Container>
      <Text>Timeline</Text>
    </Container>
  );
};
export default TimeLine;
