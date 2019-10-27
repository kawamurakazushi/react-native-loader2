import React, { useState, useContext } from "react";
import { View, ActivityIndicator } from "react-native";

export const LoaderContext = React.createContext<any>(null);

export const useLoader = () => {
  const [loading, setLoading] = useContext(LoaderContext);
  const showLoader = () => {
    setLoading(true);
  };
  const hideLoader = () => {
    setLoading(false);
  };

  return { showLoader, hideLoader };
};

const Loader = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#444a",
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View
        style={{
          borderRadius: 4,
          backgroundColor: "white",
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    </View>
  );
};

interface Props {
  children?: React.ReactNode;
  config?: {};
}

export const Provider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoaderContext.Provider value={[loading, setLoading]}>
      <>
        {loading && <Loader />}
        {children}
      </>
    </LoaderContext.Provider>
  );
};
