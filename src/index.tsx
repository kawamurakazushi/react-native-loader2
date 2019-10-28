import React, { useState, useContext } from "react";

import { Loader } from "./Loader";

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
}

interface Config {
  size: number;
  backgroundColor: string;
  foregroundColor: string;
  spinnerColor: string;
  cornerRadius: number;
  titleColor: string;
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
    titleColor
  } = { ...defaultConfig, ...config };

  return (
    <LoaderContext.Provider value={{ setLoading, setTitle }}>
      <>
        {loading && (
          <Loader
            size={size}
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            spinnerColor={spinnerColor}
            cornerRadius={cornerRadius}
            title={title}
            titleColor={titleColor}
          />
        )}
        {children}
      </>
    </LoaderContext.Provider>
  );
};
