import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultPostsScreen from "../NestedScreens/DefaultPostsScreen";
import CommentsScreen from "../NestedScreens/CommentsScreen";
import MapScreen from "../NestedScreens/MapScreen";

const NestedScreens = createStackNavigator();

export default function PostsScreen() {
  return;
  <NestedScreens.Navigator>
    <NestedScreens name="Публикации" component={DefaultPostsScreen} />
    <NestedScreens name="Комментарии" component={CommentsScreen} />
    <NestedScreens name="Карта" component={MapScreen} />
  </NestedScreens.Navigator>;
}
