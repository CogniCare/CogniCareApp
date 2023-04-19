import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Login";
import OnboardingScreen from "./Onboarding";
import DashboardScreen from "./Dashboard";
import PrescriptionScreen from "./prescription";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="prescription" component={PrescriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
