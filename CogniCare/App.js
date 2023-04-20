import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import LoginScreen from "./Login";
import OnboardingScreen from "./Onboarding";
import DashboardScreen from "./Dashboard";
import ScheduleScreen from "./Schedule";
import ProfileScreen from "./Profile";
import PrescriptionScreen from "./prescription";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}

function ScheduleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#33CC66",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="dashboard"
                type="material"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleStack}
          options={{
            tabBarLabel: "Schedule",
            tabBarIcon: ({ color, size }) => (
              <Icon name="calendar" type="material" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" type="material" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
