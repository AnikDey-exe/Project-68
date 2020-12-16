import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FB from './screens/FB';
import IG from './screens/IG';

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: FB },
  Instagram: { screen:IG }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});