import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "./Firebase/firebase";
import Diagnosis from "./Diagnosis"; // import Diagnosis component

const user = auth.currentUser;

const Onboarding = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  function writeUserData(userId, name, email, date, num, condiation) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      fullname: name,
      email: email,
      bday: date,
      phoneNum: num,
      disease: condiation,
    });
  }

  const handleOnboarding = () => {
    // Handle onboarding logic here
    navigation.navigate("Diagnosis");

    writeUserData(
      "4CYYwVo2rZdDdYHYC66gMrnBQmI2",
      fullName,
      email,
      dob,
      phoneNumber,
      diagnosis
    );
    console.log("Complete Onboarding:");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CogniCare Onboarding</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="DOB"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <Button title="Input Diagnosis" onPress={handleOnboarding} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    margin: 16,
    width: "80%",
    borderRadius: 5,
    fontSize: 18,
  },
});

export default Onboarding;
