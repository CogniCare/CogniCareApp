import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "./Firebase/firebase";

export default function Prescription({ navigation }) {
  const [drugs, setDrugs] = useState([]);
  const [name, setName] = useState("");
  const [prescription, setPrescription] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleAddDrug = () => {
    const newDrug = {
      name,
      prescription,
      instructions,
    };
    setDrugs([...drugs, newDrug]);
    setName("");
    setPrescription("");
    setInstructions("");
  };

  const handleDeleteDrug = (index) => {
    const newDrugs = [...drugs];
    newDrugs.splice(index, 1);
    setDrugs(newDrugs);
  };

  const handleSavePrescription = () => {
    const db = getDatabase();
    const userId = "JTyCd6CsrERVsTNnR3ekIyicgKA2"; // Replace with your user ID

    // Loop through each drug in the array and upload it to Firebase
    drugs.forEach((drug, index) => {
      const drugId = `drug${index + 1}`; // Generate a unique ID for the drug
      const drugRef = ref(db, `users/${userId}/drugs/${drugId}`);

      set(drugRef, {
        name: drug.name,
        prescription: drug.prescription,
        instructions: drug.instructions,
      });
    });

    console.log("Prescription uploaded");
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prescription Page</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Drug name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Prescription"
          value={prescription}
          onChangeText={setPrescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Instructions"
          value={instructions}
          onChangeText={setInstructions}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddDrug}>
          <Text style={styles.addButtonText}>Add Drug</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.drugsList}>
        {drugs.map((drug, index) => (
          <View style={styles.drug} key={index}>
            <Text style={styles.drugName}>{drug.name}</Text>
            <Text>{drug.prescription}</Text>
            <Text>{drug.instructions}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteDrug(index)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSavePrescription}
      >
        <Text style={styles.saveButtonText}>Save Prescription</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#0782F9",
    padding: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  drugsList: {
    width: "80%",
  },
  drug: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drugName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#0782F9",
    padding: 10,
    alignItems: "center",
    marginTop: 200,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
