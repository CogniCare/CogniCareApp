import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from 'react-native-elements';
import {auth} from "./Firebase/firebase";
import { onValue } from "firebase/database";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";



import { getDatabase, ref, child, get } from "firebase/database";

function useUserData(userId) {
  const [userData, setUserData] = useState(null);
  const db = getDatabase();
  const userRef = ref(db, 'users/' + userId);

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
    });
  }, [userId]);

  return userData;
}

const Dashboard = ({ navigation }) => {
  const userData = useUserData('JTyCd6CsrERVsTNnR3ekIyicgKA2');

  if (userData) {
    //var drug_1 = userData.drugs[0];
    //var drug_2 = userData.drugs[1];
    //var drug_3 = userData.drugs[2];
    //var drug_4 = userData.drugs[3];

    var drug_1 = "drug 1";
    var drug_2 = "drug 2";
    var drug_3 = "drug 3";
    var drug_4 = "drug 4";

  }
  console.log(drug_1)

  const pills = [
    { time: "08:00 AM", name: drug_1},
    { time: "10:00 AM", name: drug_2},
    { time: "12:00 PM", name: drug_3},
    { time: "03:00 PM", name: drug_4},
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
      </ScrollView>
    </View>
  )};

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