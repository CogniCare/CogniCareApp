import React, { useState } from "react";
import { View, Text, TextInput, Button,TouchableOpacity, StyleSheet } from "react-native";
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

  function writeUserData(userId, name, email, date, num, sex) {
    const db = getDatabase();
    set(ref(db, "users/" + userId + "/onboarding"), {
      fullname: name,
      email: email,
      bday: date,
      phoneNum: num,
      Gender: sex,
    });
    
    //  const drugRef = ref(db, `users/${userId}/drugs/${drugId}`);
    
  }

  const handleOnboarding = () => {
    // Handle onboarding logic here
    navigation.navigate("Diagnosis");

    writeUserData(
      "JTyCd6CsrERVsTNnR3ekIyicgKA2",
      fullName,
      email,
      dob,
      phoneNumber,
      gender,
    );
    console.log("Complete Onboarding:");

    
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell Us About You!</Text>
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
      <TouchableOpacity style={styles.saveButton} onPress={handleOnboarding}>
      <Text style={styles.saveButtonText}>Input Diagnosis</Text>
      </TouchableOpacity>
      
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  saveButton:{
    backgroundColor: '#0782F9',
    padding: 10,
    alignItems: 'center',
    marginTop: 200,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
