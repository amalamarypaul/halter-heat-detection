import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { default as theme } from "./theme.json";

import Navigation from "src/navigation";
import { store } from "src/store/store";
import "src/mockServer";

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Navigation />
              <StatusBar />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </ApplicationProvider>
      </Provider>
    </>
  );
}
