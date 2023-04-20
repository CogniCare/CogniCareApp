import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = "dashboard";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === "Schedule") {
            iconName = "calendar";
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === "Profile") {
            iconName = "person";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#e91e63",
        inactiveTintColor: "#ccc",
        showLabel: false,
        style: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
