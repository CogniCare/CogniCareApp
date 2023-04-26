import React from "react";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { getDatabase, ref, set,get } from "firebase/database";
import { onValue } from "firebase/database";
import { useEffect } from "react";




const Profile = () => {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [prescription, setPrescription] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [clinicInfo, setClinicInfo] = useState("");
  // Get a reference to the database
  const db = getDatabase();

// Get the current user's ID
    const userId = "JTyCd6CsrERVsTNnR3ekIyicgKA2"; // Replace with your user ID;

// Get a reference to the "onboarding" node for the current user

// Listen for changes to the diagnostics data and log the data to the console
useEffect(() => {
  // Get a reference to the "onboarding" node for the current user
  const onboardingRef = ref(db, "users/" + userId + "/onboarding");

  // Listen for changes to the onboarding data and update the state values accordingly
  onValue(onboardingRef, (snapshot) => {
    const onboarding = []; // Create an empty array to store the onboarding data
    snapshot.forEach((childSnapshot) => {
      const onboard = childSnapshot.val();
      onboarding.push(onboard);
    });
    // Update the state values with the fetched data
    setName(onboarding[3] || "");
    setDOB(onboarding[1] || "");
    setPrescription(onboarding[2] || "");
    setDoctorName(onboarding[4] || "");
    setClinicInfo(onboarding[0] || "");
  });
}, []);


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={(text) => setDOB(text)}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={prescription}
        onChangeText={(text) => setPrescription(text)}
      />
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={doctorName}
        onChangeText={(text) => setDoctorName(text)}
      />
      <Text style={styles.label}>Gender:</Text>
      <TextInput
        style={styles.input}
        value={clinicInfo}
        onChangeText={(text) => setClinicInfo(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default Profile;
