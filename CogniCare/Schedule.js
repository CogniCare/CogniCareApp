import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

const data = [
  {
    day: "Monday",
    pills: [
      {
        name: "Aspirin",
        time: "8:00 AM",
        dosage: "500mg",
        instructions: "Take with food",
        remaining: 3,
      },
      {
        name: "Ibuprofen",
        time: "12:00 PM",
        dosage: "200mg",
        instructions: "Take with water",
        remaining: 2,
      },
      {
        name: "Acetaminophen",
        time: "6:00 PM",
        dosage: "500mg",
        instructions: "Take with food",
        remaining: 1,
      },
    ],
  },
  {
    day: "Tuesday",
    pills: [
      {
        name: "Aspirin",
        time: "8:00 AM",
        dosage: "500mg",
        instructions: "Take with food",
        remaining: 2,
      },
      {
        name: "Ibuprofen",
        time: "12:00 PM",
        dosage: "200mg",
        instructions: "Take with water",
        remaining: 1,
      },
      {
        name: "Acetaminophen",
        time: "6:00 PM",
        dosage: "500mg",
        instructions: "Take with food",
        remaining: 0,
      },
    ],
  },
  {
    day: "Wednesday",
    pills: [
      {
        name: "Aspirin",
        time: "8:00 AM",
        dosage: "500mg",
        instructions: "Take with food",
        remaining: 3,
      },
      {
        name: "Ibuprofen",
        time: "12:00 PM",
        dosage: "200mg",
        instructions: "Take with water",
        remaining: 3,
      },
      {
        name: "Acetaminophen",
        time: "6:00 PM",
        dosage: "500mg",
        instructions: "Take with food",
        remaining: 1,
      },
    ],
  },
  {
    day: "Thursday",
    pills: [
      {
        name: "Aspirin",
        time: "8:00 AM",
        dosage: "500mg",
        instructions: "Take with food",
        remaining: 0,
      },
      {
        name: "Ibuprofen",
        time: "12:00 PM",
        dosage: "200mg",
        instructions: "Take with water",
        remaining: 2,
      },
      {
        name: "Acetaminophen",
        time: "6:00 PM",
        dosage: "500mg",
        instructions: "Take with food",
        remaining: 2,
      },
    ],
  },
  {
    day: "Friday",
    pills: [
      {
        name: "Aspirin",
        time: "8:00 AM",
        dosage: "500mg",
        instructions: "Take with food",
        remaining: 3,
      },
      {
        name: "Ibuprofen",
        time: "12:00 PM",
        dosage: "200mg",
        instructions: "Take with water",
        remaining: 1,
      },
      {
        name: "Acetaminophen",
        time: "6:00 PM",
        dosage: "500mg",
        instructions: "Take with food",
        remaining: 1,
      },
    ],
  },
];

const ScheduleScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayText}>{day.day}</Text>
          {day.pills.map((pill, index) => (
            <View key={index} style={styles.pillContainer}>
              <View style={styles.pillInfo}>
                <Text style={styles.pillName}>{pill.name}</Text>
                <Text style={styles.pillTime}>{pill.time}</Text>
              </View>
              <View style={styles.pillInfo}>
                <Text style={styles.pillDosage}>{pill.dosage}</Text>
                <Text style={styles.pillInstructions}>{pill.instructions}</Text>
                <Text style={styles.pillRemaining}>
                  {pill.remaining} Remaining
                </Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pillContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  pillInfo: {
    flexDirection: "column",
    alignItems: "center",
  },
  pillName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  pillTime: {
    fontSize: 12,
    color: "#777",
  },
  pillDosage: {
    fontSize: 14,
    fontWeight: "bold",
  },
  pillInstructions: {
    fontSize: 12,
    color: "#777",
  },
  pillRemaining: {
    fontSize: 12,
    color: "#777",
  },
});

export default ScheduleScreen;
