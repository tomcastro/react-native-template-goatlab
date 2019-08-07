# React Native Goatlab Template

![npm](https://img.shields.io/npm/v/react-native-template-goatlab?color=success&style=flat-square)

*:goat: Developed by [Goat](https://goatlab.io) :goat:*

Official template for React Native apps used by Goat for its iOS and Android apps. It is based on the newest and latest version of React Native and includes several starter packages for you to start your own app ASAP! :rocket:

This template is useful for all types of apps, as it includes the bare minimum for you to start coding in just a couple of minutes. This templates also includes useful debugging tools such as Reactotron, and sets a standard for your development team, such as out-of-the-box ESLint support and file structure for components, views and tests.

## Installation and Usage

:warning: This template is intended for React Native versions >= 0.60. It has not been tested with previous versions. :warning:

To start a new app with React Native Goatlab, simply start a new project using React Native CLI (https://facebook.github.io/react-native/docs/getting-started.html). To do this, first install React Native CLI globally:

```
yarn global add react-native-cli
```

Then, create a new app using `goatlab` as a template. Easy as pie! :cake:

```
react-native init PROJECT_NAME --template goatlab
```

The template will replace your project's name in all relevant parts of the app. Neat! :godmode:

To start using your app, first copy the existing `.env.example` file into a new `.env` file and replace your IP address to start debugging with Reactotron. After that, simply run `yarn react-native run-ios` (only on Mac) or `yarn react-native run-android` (emulator must be running or an Android device with USB debugging must be plugged in) depending on your platform of choice.

## Features

This template includes the following:

* React Native 0.60.4 (now with Hooks support! :raised_hands:)
* Entirely written in Typescript
* Easy to use and understand folder structure to get you up and running as fast as possible
* Starter example with an essential counter component :sweat_smile:
* [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) component framework and themes
* [React Navigation](https://reactnavigation.org/)
* [Reactotron](https://github.com/infinitered/reactotron) configured for debugging (including console.tron shortcut)
* [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) for component testing
* Redux support
* ESLint, TSLint and Prettier configured out-of-the-box
* Visual Studio Code settings for Prettier and ESLint (:warning: must install VSCode extensions to use them)

## How to contribute

If you'd like to contribute to this template, your help is more than welcome! :feelsgood:

Big thanks to [Chris Geirman](https://github.com/geirman) and his super useful [guide](https://medium.com/dailyjs/the-1-2-3s-of-react-native-templates-1f5dda037e11) on React Native templates, which you may want to read before adding your contributions.

### Local testing

Fork this repository, clone it, and start a new app with the following command to use the local template:

```
react-native init test --template file:///path/to/your/cloned/repo
```

### Pull requests and Issues

PR's and issues are a great contribution for us, and we'll get to them as fast as we (humanly :robot:) can. Please create your pull requests from your own fork, and if you're raising an issue, try to be as descriptive as possible so we can zap those pesky bugs :zap:.

