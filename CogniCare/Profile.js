import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { getDatabase, ref, set,get } from "firebase/database";
import { onValue } from "firebase/database";



const Profile = () => {
  const [name, setName] = React.useState(onboarding[3]);
  const [dob, setDOB] = React.useState(onboarding[1]);
  const [prescription, setPrescription] = React.useState(onboarding[0]);
  const [doctorName, setDoctorName] = React.useState(onboarding[2]);
  const [clinicInfo, setClinicInfo] = React.useState(onboarding[4]);
  // Get a reference to the database
  const db = getDatabase();

// Get the current user's ID
  const userId = "JTyCd6CsrERVsTNnR3ekIyicgKA2"; // Replace with your user ID;

// Get a reference to the "onboarding" node for the current user
  const onboardingRef = ref(db, "users/" + userId + "/onboarding");
/*
// Retrieve the "onboarding" data using the get() method
get(onboardingRef).then((snapshot) => {
  if (snapshot.exists()) {
    // Access the data fields from the snapshot using .val()
    const { fullname, email, bday, phoneNum, Gender } = snapshot.val();

    // Use the retrieved data elsewhere in your code
    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Birthday: ", bday);
    console.log("Phone number: ", phoneNum);
    console.log("Gender: ", Gender);

    // Pass the retrieved data to a function
    myFunction(fullname, email, bday, phoneNum, Gender);
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error("Error retrieving data: ", error);
});
*/

// Define a function that uses the retrieved data

// Listen for changes to the diagnostics data and log the data to the console
onValue(onboardingRef, (snapshot) => {
  onboarding = []; // Create an empty array to store the diagnostics data
  snapshot.forEach((childSnapshot) => {
    const onboard = childSnapshot.val();
    onboarding.push(onboard);
  });
});

console.log("Values",onboarding);


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
      <Text style={styles.label}>Gender:</Text>
      <TextInput
        style={styles.input}
        value={prescription}
        onChangeText={(text) => setPrescription(text)}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={doctorName}
        onChangeText={(text) => setDoctorName(text)}
      />
      <Text style={styles.label}>Phone Number:</Text>
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
