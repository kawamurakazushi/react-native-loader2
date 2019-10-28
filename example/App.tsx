import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-native-loader2";

import Buttons from "./Buttons";

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>EXAMPLE</Text>
        <Buttons />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
