import React from "react";
import { Button } from "react-native";
import { useLoader } from "react-native-loader2";

const sleep = (sec: number) => {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
};

export default () => {
  const { showLoader, hideLoader } = useLoader();
  return (
    <Button
      title="Show Loader"
      onPress={async () => {
        showLoader();
        await sleep(1);
        hideLoader();
      }}
    />
  );
};
