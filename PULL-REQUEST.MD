# Proposal: v5.1.2

This pull request is a proposal for a new major version of react-ionicons.

## Version Number

Why version `5.1.2`? The core value of this library is to allow developers to implement the incredible [IonIcons](https://ionicons.com/) into React applications with ease. Let's consider https://github.com/ionic-team/ionicons the source-of-truth and keep our version numbers in lock-step. This way, developers using this library know immediately which IonIcons are available compared to the source.

## New API

IonIcons already has an amazing documentation page, and if we mirror our API to theirs, we get documentation for free! In fact, the only difference between APIs will be the PascalCase-ing of React component names when compared to IonFramework components.

```js
import React from "react";
import IonIcon from "react-ionicons";

function MyComponent() {
  return <IonIcon name="airplane-outline" />;
}

export default MyComponent;
```

## Build System

If we utilize Rollup (in favor of Webpack) we can not only reduce the bundle size, but also leverage a couple of fantastic build tools that fit this project perfectly. The lethal combo here is [@svgr/rollup](https://github.com/gregberge/svgr) paired with [babel-plugin-wildcard](https://github.com/vihanb/babel-plugin-wildcard). This allows us to skip any pre-generation steps and use the svg sources directly!

This way, when IonIcons releases updates to the icons, all we need to do is download the svg sources, add/update them in `src/svgs/`, build, and release! This should make it a lot easier to make sure this library stays relevant.
