import React, { useState, useContext } from "react";
import { View, ActivityIndicator } from "react-native";

interface Context {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoaderContext = React.createContext<Context>({
  setLoading: () => {}
});

export const useLoader = () => {
  const { setLoading } = useContext(LoaderContext);

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  return { showLoader, hideLoader };
};

interface LoaderProps {
  size: number;
  backgroundColor: string;
  foregroundColor: string;
  spinnerColor: string;
  cornerRadius: number;
}

const Loader = ({
  size,
  backgroundColor,
  foregroundColor,
  spinnerColor,
  cornerRadius
}: LoaderProps) => (
  <View
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: backgroundColor,
      zIndex: 99999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <View
      style={{
        borderRadius: cornerRadius,
        backgroundColor: foregroundColor,
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ActivityIndicator color={spinnerColor} size="large" />
    </View>
  </View>
);

export interface OptionalConfig {
  size?: number;
  backgroundColor?: string;
  foregroundColor?: string;
  spinnerColor?: string;
  cornerRadius?: number;
}

interface Config {
  size: number;
  backgroundColor: string;
  foregroundColor: string;
  spinnerColor: string;
  cornerRadius: number;
}

export interface ProviderProps {
  children?: React.ReactNode;
  config?: OptionalConfig;
}

const defaultConfig: Config = {
  size: 100,
  backgroundColor: "#444a",
  foregroundColor: "#fff",
  spinnerColor: "gray",
  cornerRadius: 4
};

export const Provider = ({ children, config }: ProviderProps) => {
  const [loading, setLoading] = useState(false);
  const {
    size,
    backgroundColor,
    foregroundColor,
    spinnerColor,
    cornerRadius
  } = { ...defaultConfig, ...config };

  return (
    <LoaderContext.Provider value={{ setLoading }}>
      <>
        {loading && (
          <Loader
            size={size}
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            spinnerColor={spinnerColor}
            cornerRadius={cornerRadius}
          />
        )}
        {children}
      </>
    </LoaderContext.Provider>
  );
};
