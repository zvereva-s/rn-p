import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../NestedScreens/Home";
import CommentsScreen from "../NestedScreens/CommentsScreen";
import MapScreen from "../NestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen name="Комментарии" component={CommentsScreen} />
      <NestedScreen.Screen name="Карта" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
