import React, { useState } from "react";
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

  const [checkedPills, setCheckedPills] = useState([]);

  const handleCheck = (pillName) => {
    if (checkedPills.includes(pillName)) {
      setCheckedPills(checkedPills.filter((name) => name !== pillName));
    } else {
      setCheckedPills([...checkedPills, pillName]);
    }
  };

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
            <View
              style={{
                height: 20,
                width: `${(checkedPills.length / (pills.length * 7)) * 100}%`,
                backgroundColor: "#33CC66",
              }}
            />
          </View>
        </View>
        <View style={styles.pillsSection}>
          <Text style={styles.sectionTitle}>Pills for Today</Text>
          {pills.map((pill, index) => (
            <View style={styles.pillListing} key={index}>
              <Text
                style={[
                  styles.pillName,
                  {
                    textDecorationLine: checkedPills.includes(pill.name)
                      ? "line-through"
                      : "none",
                  },
                ]}
              >
                {pill.name}
              </Text>
              <CheckBox
                value={checkedPills.includes(pill.name)}
                onValueChange={() => handleCheck(pill.name)}
              />
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
    marginTop: 10,
    height: 350,
    borderRadius: 10,
    overflow: "hidden",
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    height: 250,
  },
  progressBar: {
    marginTop: 10,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden",
  },
  pillsSection: {
    marginTop: 30,
  },
  pillListing: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  pillTime: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  pillName: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
});
