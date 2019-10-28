import React, { useState, useContext } from "react";
import { View, ActivityIndicator, Text } from "react-native";

interface Context {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<string | null>>;
}

const LoaderContext = React.createContext<Context>({
  setLoading: () => {},
  setTitle: () => {}
});

export const useLoader = () => {
  const { setLoading, setTitle } = useContext(LoaderContext);

  const showLoader = (title?: string) => {
    setLoading(true);
    if (title) {
      setTitle(title);
    }
  };

  const hideLoader = () => {
    setLoading(false);
    setTitle(null);
  };

  return { showLoader, hideLoader };
};

export interface OptionalConfig {
  size?: number;
  backgroundColor?: string;
  foregroundColor?: string;
  spinnerColor?: string;
  cornerRadius?: number;
  titleColor?: string;
  spinnerComponent?: React.FunctionComponent;
}

interface Config {
  size: number;
  backgroundColor: string;
  foregroundColor: string;
  spinnerColor: string;
  cornerRadius: number;
  titleColor: string;
  spinnerComponent?: React.FunctionComponent;
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
  cornerRadius: 4,
  titleColor: "#444"
};

export const Provider = ({ children, config }: ProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string | null>(null);

  const {
    size,
    backgroundColor,
    foregroundColor,
    spinnerColor,
    cornerRadius,
    titleColor,
    spinnerComponent: SpinnerComponent
  } = { ...defaultConfig, ...config };

  return (
    <LoaderContext.Provider value={{ setLoading, setTitle }}>
      <>
        {loading && (
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
              {SpinnerComponent ? (
                <SpinnerComponent />
              ) : (
                <ActivityIndicator color={spinnerColor} size="large" />
              )}
              {title && (
                <Text style={{ marginTop: 8, color: titleColor }}>{title}</Text>
              )}
            </View>
          </View>
        )}
        {children}
      </>
    </LoaderContext.Provider>
  );
};
