import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TimeLine } from "src/screens";

type RootStackParamList = {
  TimeLine: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="TimeLine">
      <RootStack.Screen
        name="TimeLine"
        component={TimeLine}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
