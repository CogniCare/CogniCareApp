import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const Schedule = () => {
  const [medicationPlan, setMedicationPlan] = useState([]);

  useEffect(() => {
    const getMedicationPlan = async () => {
      try {
        const response = await fetch("http://localhost:3000/medication-plan");
        const data = await response.json();
        setMedicationPlan(data);
      } catch (error) {
        console.error(error);
      }
    };
    getMedicationPlan();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.day}</Text>
        <FlatList
          data={item.drugs}
          renderItem={({ item }) => (
            <View style={styles.drug}>
              <Text style={styles.drugName}>{item.drugName}</Text>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.dosage}>{item.dosage}</Text>
              <Text style={styles.instructions}>{item.instructions}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Medication Plan</Text>
      <FlatList
        data={medicationPlan}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  drug: {
    marginBottom: 10,
  },
  drugName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  time: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 5,
  },
  dosage: {
    marginBottom: 5,
  },
  instructions: {},
});
export default Schedule;
