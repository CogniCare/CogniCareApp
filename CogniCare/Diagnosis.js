import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Diagnosis = ({ navigation }) => {
  const [diagnosisInput, setDiagnosisInput] = useState("");

  const handleDiagnosisSubmit = () => {
    navigation.navigate("Prescription");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What is your diagnosis?</Text>
      <TextInput
        style={styles.input}
        value={diagnosisInput}
        onChangeText={setDiagnosisInput}
        placeholder="Enter your diagnosis"
      />
      <Button title="Enter Prescription" onPress={handleDiagnosisSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Diagnosis;
