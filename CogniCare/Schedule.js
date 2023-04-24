import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const Schedule = () => {
  const [medicationPlan, setMedicationPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMedicationPlan() {
      const response = await axios.get("http://localhost:3000/medication-plan");
      setMedicationPlan(response.data.medicationPlan);
      setLoading(false);
    }

    fetchMedicationPlan();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading medication plan...</Text>
      ) : medicationPlan ? (
        <View>
          <Text style={styles.table}>{medicationPlan}</Text>
        </View>
      ) : (
        <Text>Failed to load medication plan.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    fontFamily: "monospace",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Schedule;
