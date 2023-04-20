import React from "react";
import { Calendar } from "react-native-calendars";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  CheckBox,
} from "react-native";

const Dashboard = ({ navigation }) => {
  const pills = [
   { time: "08:00 AM", name: "Metformin" },
    { time: "10:00 AM", name: "Aspirin" },
    { time: "12:00 PM", name: "Nexium" },
    { time: "03:00 PM", name: "Lisinopril" },
    { time: "06:00 PM", name: "Prozac" },
    { time: "08:00 PM", name: "Atorvastatin" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Activity</Text>
          <View style={styles.weekCalendar}>
            <Calendar
              style={styles.calendar}
              hideExtraDays={true}
              current={"2023-03-28"}
              markedDates={{
                "2023-03-28": { selected: true, marked: true },
                "2023-03-29": { marked: true },
                "2023-03-30": { marked: true },
                "2023-03-31": { marked: true },
                "2023-04-01": { marked: true },
                "2023-04-02": { marked: true },
                "2023-04-03": { marked: true },
              }}
            />
          </View>
          <View style={styles.progressBar}>
            {/* Progress bar display here */}
          </View>
        </View>
        <View style={styles.pillsSection}>
          <Text style={styles.sectionTitle}>Pills for Today</Text>
          {pills.map((pill, index) => (
            <View style={styles.pillListing} key={index}>
              <Text style={styles.pillTime}>{pill.time}</Text>
              <Text style={styles.pillName}>{pill.name}</Text>
              {/*<CheckBox />*/}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  activitySection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  weekCalendar: {
    height: 120,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  progressBar: {
    height: 10,
    marginTop: 10,
    backgroundColor: "#DDDDDD",
  },
  pillsSection: {
    marginTop: 20,
  },
  pillListing: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  pillTime: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  pillName: {
    flex: 4,
    fontSize: 16,
    marginLeft: 10,
  },
});
