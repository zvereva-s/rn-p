import React, { useEffect, useCallback, useState } from "react";
import { StyleSheet, View, Text, LogBox } from "react-native";
import { Provider, useSelector } from "react-redux";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { store } from "./redux/store";
import useAuth from "./shared/hooks/useAuth";
import useRoute from "./router";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App /> // Now App has access to context
    </Provider>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  const auth = useAuth();
  console.log({ auth });

  const routing = useRoute();
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
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        {routing}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
