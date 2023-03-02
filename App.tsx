import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import Navigation from "src/navigation";
import { store } from "src/store/store";
import "src/mockServer";

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </ApplicationProvider>
      </Provider>
    </>
  );
}
