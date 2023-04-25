import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { auth } from "./Firebase/firebase";
import { onValue } from "firebase/database";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { getDatabase, ref, child, get } from "firebase/database";

const db = getDatabase();
const userId = 'JTyCd6CsrERVsTNnR3ekIyicgKA2'; // Replace with your user ID
let drugs = []; // Declare the drugs array in a higher scope

// Create a reference to the drugs location in the database for the current user
const drugsRef = ref(db, `users/${userId}/drugs`);

// Listen for changes to the drugs data and update the drugs array
onValue(drugsRef, (snapshot) => {
  drugs = []; // Clear the drugs array before updating it
  snapshot.forEach((childSnapshot) => {
    const drug = childSnapshot.val();
    drugs.push(drug);
  });
});

// Create a reference to the diagnostics location in the database for the current user
const diagnosticsRef = ref(db, `users/${userId}/diagnostics`);

// Listen for changes to the diagnostics data and log the data to the console
onValue(diagnosticsRef, (snapshot) => {
  diagnostics = []; // Create an empty array to store the diagnostics data
  snapshot.forEach((childSnapshot) => {
    const diagnostic = childSnapshot.val();
    diagnostics.push(diagnostic);
  });
});

const handleDispensePill = () => {
  // Logic to dispense pills
  //handleCheck(pills.name);
  
};


const Dashboard = ({ navigation }) => {

  if (true) {
    //var drug_1 = userData.drugs[0];
    //var drug_2 = userData.drugs[1];
    //var drug_3 = userData.drugs[2];
    //var drug_4 = userData.drugs[3];

    var drug_1 = "drug 1";
    var drug_2 = "drug 2";
    var drug_3 = "drug 3";
    var drug_4 = "drug 4";
  }
  console.log("Initial drugs data:", drugs[0].name);
  console.log("Diagnostics data:", diagnostics[0].name);



  const pills = [
    { time: "08:00 AM", name: drugs[0].name},
    { time: "10:00 AM", name: drugs[1].name},
    { time: "12:00 PM", name: drug_3 },
    { time: "03:00 PM", name: drug_4 },
  ];

  const [checkedPills, setCheckedPills] = useState([]);

  const handleCheck = (pillName) => {
    if (checkedPills.includes(pillName)) {
      setCheckedPills(checkedPills.filter((name) => name !== pillName));
    } else {
      setCheckedPills([...checkedPills, pillName]);
    }
  };

  const [selectedDate, setSelectedDate] = useState("");

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
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
              onDayPress={handleDayPress}
              markedDates={{
                [selectedDate]: { selected: true, marked: true },
              }}
              theme={{
                "stylesheet.agenda.main": {
                  week: {
                    marginTop: 20,
                    marginBottom: 20,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  },
                },
              }}
              mode={"agenda"}
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
          <Text style={styles.sectionTitle}>Pills for {selectedDate}</Text>
          {pills.map((pill, index) => (
            <View style={styles.pillListing} key={index}>
              <TouchableOpacity
                onPress={() => handleCheck(pill.name)}
                style={{ marginRight: 10 }}
              >
                {checkedPills.includes(pill.name) ? (
                  <Icon name="check-square" size={24} color="#33CC66" />
                ) : (
                  <Icon name="square-o" size={24} color="black" />
                )}
              </TouchableOpacity>
              <Text style={styles.pillText}>{pill.name}</Text>
            </View>
          ))}
        </View>
      <TouchableOpacity style={styles.button} onPress={handleDispensePill}>
        <Text style={styles.buttonText}>Dispense Pill</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#33CC66",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});