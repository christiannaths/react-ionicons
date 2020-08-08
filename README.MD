<p align="center">
  <svg width="8em" height="8em" viewBox="0 0 32 32" fill="#61dbfb">
    <circle opacity="0.2" cx="16" cy="16" r="16"></circle>
    <circle opacity="0.4" cx="16" cy="16" r="11"></circle>
    <circle opacity="1" cx="16" cy="16" r="6"></circle>
    <circle fill="#20232a" cx="23.5" cy="8.5" r="2"></circle>
  </svg>
</p>

# IonIcons for React

## Install

```sh
$ npm install --save react-ionicons
```

```sh
$ yarn add react-ionicons
```

## Usage

```js
import React from "react";
import { render } from "react-dom";
import IonIcon from "react-ionicons";

render(<IonIcon name="logo-nodejs" />, document.getElementById("root"));
```

### Browserify

[`browserify`](https://npmjs.com/packages/browserify) support is coming soon...

## Features

- No dependencies.
- SVG icons.
- Simple API.
- Customizable.
- Supports Create React App.

## API:

| Param  | Type     | Description                             | Default   | Example                   |
| ------ | -------- | --------------------------------------- | --------- | ------------------------- |
| `name` | `String` | The name of the IonIcon you wish to use | `name=""` | `name="airplane-outline"` |
