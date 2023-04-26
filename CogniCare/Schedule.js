import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

const data = [
  {
    day: "Monday",
    pills: [
      {
        name: "Metaformin",
        time: "8:00 AM", dosage: "500mg", instructions: "Take with food",
      
      },
      {
        name: "Aricept",
        time: "10:00 AM",
        dosage: "5mg",
        instructions: "Take with water",
        
      },
      {
        name: "Metaformin",
        time: "5:00PM", dosage: "500mg", instructions: "Take with food",
        
      },
      {
        name: "Glutarol",
        time: "8:00 PM",
        dosage: "5mg",
        instructions: "Take with water before bed",
       
      },
    ],
  },
  {
    day: "Tuesday",
    pills: [
      {
        name: "Metaformin",
        time: "8:00 AM", dosage: "500mg", instructions: "Take with food",
       
      },
      {
        name: "Aricept",
        time: "10:00 AM",
        dosage: "5mg",
        instructions: "Take with water",
       
      },
      {
        name: "Metaformin",
        time: "5:00PM", dosage: "500mg", instructions: "Take with food",
        
      },
      {
        name: "Glutarol",
        time: "8:00 PM",
        dosage: "5mg",
        instructions: "Take with water before bed",
       
      },
    ],
  },
  {
    day: "Wednesday",
    pills: [
      {
        name: "Metaformin",
        time: "8:00 AM", dosage: "500mg", instructions: "Take with food",
       
      },
      {
        name: "Aricept",
        time: "10:00 AM",
        dosage: "5mg",
        instructions: "Take with water",
        
      },
      {
        name: "Metaformin",
        time: "5:00PM", dosage: "500mg", instructions: "Take with food",
        
      },
      {
        name: "Glutarol",
        time: "8:00 PM",
        dosage: "5mg",
        instructions: "Take with water before bed",
        
      },
    ],
  },
  {
    day: "Thursday",
    pills: [
      {
        name: "Metaformin",
        time: "8:00 AM", dosage: "500mg", instructions: "Take with food",
       
      },
      {
        name: "Aricept",
        time: "10:00 AM",
        dosage: "5mg",
        instructions: "Take with water",
      
      },
      {
        name: "Metaformin",
        time: "5:00PM", dosage: "500mg", instructions: "Take with food",
      
      },
      {
        name: "Glutarol",
        time: "8:00 PM",
        dosage: "5mg",
        instructions: "Take with water before bed",
        
      },
    ],
  },
  {
    day: "Friday",
    pills: [
      {
        name: "Metaformin",
        time: "8:00 AM", dosage: "500mg", instructions: "Take with food",
        
      },
      {
        name: "Aricept",
        time: "10:00 AM",
        dosage: "5mg",
        instructions: "Take with water",
        
      },
      {
        name: "Metaformin",
        time: "5:00PM", dosage: "500mg", instructions: "Take with food",
      
      },
      {
        name: "Glutarol",
        time: "8:00 PM",
        dosage: "5mg",
        instructions: "Take with water before bed",
      },
    ],
  },
];

const ScheduleScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ marginBottom: 15 ,color: 'red', fontSize : 10, fontWeight : "bold"}}>Caution: This plan is generated through AI, any may not be 100% accurate, please consult with your medication professional</Text> 
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