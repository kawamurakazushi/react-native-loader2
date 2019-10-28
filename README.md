# React Native Loader 2

A React Native Overlay Loader, powered by React Hooks.

[![npm version](https://badge.fury.io/js/react-native-loader2.svg)](https://badge.fury.io/js/react-native-loader2)
[![Actions Status](https://github.com/kawamurakazushi/react-native-loader2/workflows/{workflow_name}/badge.svg)](https://github.com/kawamurakazushi/react-native-loader2/actions)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## Example

![hero](images/example.gif)

You can see the full example [Here](https://github.com/kawamurakazushi/react-native-loader2/tree/master/example).


## Install

```
yarn add react-native-loader2
```
or
```
npm install react-native-loader2 --save
```

## Usage

Wrap the `Provider` component in the root of your project. After that you can `useLoader` in any of your child components.

```jsx
// App.tsx
import React from "react";
import { Provider } from "react-native-loader2";

import LoaderButton from './LoaderButton';

export default function App() {
  return (
    <Provider>
      <View>
        <LoaderButton />
      </View>
    </Provider>
  );
}

// LoaderButton.tsx
import React from "react";
import { Button } from "react-native";
import { useLoader } from "react-native-loader2";

export default () => {
  const { showLoader, hideLoader } = useLoader();
  return (
    <Button
      title="Show Loader"
      onPress={async () => {
        showLoader();
        await somethingAsyncThatCanTakeTime();
        hideLoader();
      }}
    />
  );
};

```

Show loader with text:

```jsx
showLoader("Loading...");
```


## Configurations

React Native Loader 2 has simple configuration system.
You need to pass the optional `config` to the `Provider`.


```jsx
const config = {
  size: 100,
  backgroundColor: "#444a",
  foregroundColor: "#fff",
  spinnerColor: "gray",
  cornerRadius: 4
}

export default function App() {
  return (
    <Provider config={config}>
      <App />
    </Provider>
  );
}
```

### List of Configurations

| Configurations     | Type                      | Default Value           |
| ------------------ | ------------------------- | ----------------------- |
| `size`             | number                    | 100                     |
| `backgroundColor`  | string                    | "#444a"                 |
| `foregroundColor`  | string                    | "#fff"                  |
| `spinnerColor`     | string                    | "gray"                  |
| `corderRadius`     | number                    | 4                       |
| `titleColor`       | string                    | "#444"                  |
| `spinnerComponent` | React.FunctionalComponent | `<ActivityIndicator />` |


## Licence
MIT