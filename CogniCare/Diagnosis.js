import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getDatabase, ref, set } from "firebase/database";
import {auth} from "./Firebase/firebase";


export default function Diagnosis({ navigation }) {
  const [diagnostics, setDiagnostics] = useState([]);
  const [newDiagnostic, setNewDiagnostic] = useState('');

  const handleAddDiagnostic = () => {
    setDiagnostics([...diagnostics, newDiagnostic]);
    setNewDiagnostic('');
  };

  const handleDeleteDiagnostic = (index) => {
    const newDiagnostics = [...diagnostics];
    newDiagnostics.splice(index, 1);
    setDiagnostics(newDiagnostics);
  };

  const handleSaveDiagnostic = () => {
    const db = getDatabase();
    const userId = 'JTyCd6CsrERVsTNnR3ekIyicgKA2'; // Replace with your user ID
    
    // Loop through each drug in the array and upload it to Firebase
    diagnostics.forEach((diagnostic, index) => {
      const diagnosticId = `diagnostic${index + 1}`; // Generate a unique ID for the diagnostic
      const diagnosticRef = ref(db, `users/${userId}/diagnostics/${diagnosticId}`);
      
      set(diagnosticRef, {
        name: diagnostic,
      });
    });
    
    console.log("diagnostics uploaded");
    navigation.navigate("Prescription");
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diagnostic Page</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter diagnostic name"
          value={newDiagnostic}
          onChangeText={setNewDiagnostic}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddDiagnostic}>
          <Text style={styles.addButtonText}>Add Diagnostic</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.diagnosticsList}>
        {diagnostics.map((diagnostic, index) => (
          <View style={styles.diagnostic} key={index}>
            <Text style={styles.diagnosticName}>{diagnostic}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteDiagnostic(index)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveDiagnostic}>
        <Text style={styles.saveButtonText}>Save Diagnosis</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#0782F9',
    padding: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  diagnosticsList: {
    width: '80%',
  },
  diagnostic: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  diagnosticName: {
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
});







