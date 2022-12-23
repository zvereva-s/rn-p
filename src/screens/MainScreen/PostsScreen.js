import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../NestedScreens/Home";
import CommentsScreen from "../NestedScreens/CommentsScreen";
import MapScreen from "../NestedScreens/MapScreen";

import IconButton from "../../shared/components/IconButton/IconButton";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreen.Navigator initialRouteName={"Публикации"} headerShown={false}>
      <NestedScreen.Screen
        name="Публикации"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconButton
              type="grid"
              focused={focused}
              size={focused ? 40 : 40}
            />
          ),
        }}
      />
      <NestedScreen.Screen
        name="Комментарии"
        component={CommentsScreen}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <NestedScreen.Screen name="Карта" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
