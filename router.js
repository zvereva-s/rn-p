import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./screens/Auth/LoginScreen";
import RegistrationScreen from "./screens/Auth/RegistrationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PostsScreen from "./screens/MainScreen/PostsScreen";
import CreatePostScreen from "./screens/CreatePostScreen";

import IconButton from "./shared/components/IconButton/IconButton";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
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
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => <IconButton type="grid" />,
        }}
      />
      <MainTab.Screen
        name="Профиль"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <IconButton type="user-focus" />
          ),
        }}
      />
      <MainTab.Screen
        name="Создать публикацию"
        component={CreatePostScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => <IconButton type="plus" />,
        }}
      />
    </MainTab.Navigator>
  );
}
