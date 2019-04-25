import React from 'react';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import MainTabNavigator, {HomeStack, FavoriteBarStack, SettingsStack, MapViewStack} from './MainTabNavigator';

const mapBottomNavigator = createBottomTabNavigator({
  MapViewStack,
  FavoriteBarStack,
  SettingsStack,
}, {
  tabBarOptions: {
    showLabel: false
  }
})

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  HomeStack,
  Main: MainTabNavigator,
  mapBottomNavigator,
}));