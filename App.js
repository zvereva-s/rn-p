import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/Auth/LoginScreen";
import RegistrationScreen from "./screens/Auth/RegistrationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PostsScreen from "./screens/MainScreen/PostsScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
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

  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <MainTab.Navigator>
          <MainTab.Screen name="Публикации" component={PostsScreen} />
          <MainTab.Screen name="Профиль" component={ProfileScreen} />
        </MainTab.Navigator>
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

//! auth

{
  /* <AuthStack.Navigator>
          <AuthStack.Screen
            options={{
              headerShown: false,
            }}
            name="Registration"
            component={RegistrationScreen}
          />
          <AuthStack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
        </AuthStack.Navigator> */
}
