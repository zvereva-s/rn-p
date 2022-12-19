import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreatePostNestedScreen from "../NestedScreens/CreatePostNestedScreen";

const NestedScreen = createStackNavigator();

export default function CreatePostScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Создть публикацию"
        component={CreatePostNestedScreen}
      />
    </NestedScreen.Navigator>
  );
}
