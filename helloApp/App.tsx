import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("Hello Cutie!");

  const handlePress = () => {
    setText(text == "Hello Cutie!" ? "Life is good!" : "Hello Cutie!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
      <StatusBar style="auto" />

      <Button
        title="Click me Nezuko!"
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24, // Adjust the font size as needed
    marginBottom: 20, // Add margin bottom to create space
    color: "white", // Change the text color to white
  },
});
