import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Dashboard from "./Dashboard";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };

  const handleSignup = () => {
    navigation.navigate("Onboarding");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CogniCare</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Log in" onPress={handleLogin} />
      <Button title="Sign up" onPress={handleSignup} />
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
    borderColor: "black",
    padding: 8,
    margin: 8,
    width: "80%",
  },
});

export default Login;
