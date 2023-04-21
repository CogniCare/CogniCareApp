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
import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "./Dashboard";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="prescription" component={PrescriptionScreen} />
      <Stack.Screen name="Dashboard" component={DashboardTabs} />
    </Stack.Navigator>
  );
}

function DashboardTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Icon name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <Icon name="schedule" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // check user authentication status here
    // setAuthenticated(true/false) accordingly
  }, []);

  if (authenticated) {
    return (
      <NavigationContainer>
        <DashboardTabs />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    );
  }
}

export default App;
