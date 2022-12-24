import React, { useEffect, useCallback } from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { store } from "./src/redux/store";
import Main from "./src/shared/components/Main/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);

  return (
    <Provider store={store}>
      <Main onLayout={onLayoutRootView} />
    </Provider>
  );
}
