import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Provider } from "react-native-loader2";

import Buttons from "./Buttons";

export default function App() {
  return (
    <Provider
      config={
        {
          // size: 150
          // spinnerComponent: () => {
          //   return <Image source={require("./assets/loader.gif")} />;
          // }
        }
      }
    >
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
