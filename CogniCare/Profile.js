import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Profile = () => {
  const [name, setName] = React.useState("John Doe");
  const [dob, setDOB] = React.useState("01/01/1990");
  const [prescription, setPrescription] = React.useState("Aspirin");
  const [doctorName, setDoctorName] = React.useState("Dr. Smith");
  const [clinicInfo, setClinicInfo] = React.useState(
    "123 Main St, Anytown USA"
  );

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
      <Text style={styles.label}>Prescription:</Text>
      <TextInput
        style={styles.input}
        value={prescription}
        onChangeText={(text) => setPrescription(text)}
      />
      <Text style={styles.label}>Doctor Name:</Text>
      <TextInput
        style={styles.input}
        value={doctorName}
        onChangeText={(text) => setDoctorName(text)}
      />
      <Text style={styles.label}>Clinic Information:</Text>
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
