import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import LoginScreen from "./screens/Auth/LoginScreen";
import RegistrationScreen from "./screens/Auth/RegistrationScreen";

import ProfileScreen from "./screens/MainScreen/ProfileScreen";
import PostsScreen from "./screens/MainScreen/PostsScreen";
import CreatePostScreen from "./screens/MainScreen/CreatePostScreen";

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
        options={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <IconButton
              type="grid"
              focused={focused}
              size={focused ? 40 : 40}
            />
          ),
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            console.log(routeName);
            if (routeName === "Комментарии" || routeName === "Карта") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      />
      <MainTab.Screen
        name="Профиль"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <IconButton
              type="user"
              focused={focused}
              size={focused ? 10 : 40}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <IconButton
              type="plus"
              focused={focused}
              size={focused ? 10 : 40}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}
