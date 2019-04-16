import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors'
import TabBarIcon from '../components/TabBarIcon';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login'
import SignupScreen from '../screens/SignUp'
import DashboardScreen from '../screens/Dashboard'
import SearchScreen from '../screens/Search'
import FavoritesScreen from '../screens/Favorites'
import SettingsScreen from '../screens/Setting'
import UploadScreen from '../screens/Upload'
import MapviewScreen from '../screens/MapView'
import RecipeScreen from '../screens/Recipe'
import { AntDesign } from "@expo/vector-icons";

export const HomeStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  Signup: SignupScreen,

});



HomeStack.navigationOptions = {
  tabBarVisible: false
};


const SearchStack = createStackNavigator({
    Search: SearchScreen,
    Recipe: RecipeScreen,
})

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
   tabBarIcon: ({ focused }) => (
    <AntDesign
      focused={focused}
      name='search1'
      size={20}
      color={focused ? Colors.primary : 'black'}
    />
  ),
};

export const FavoritesStack = createStackNavigator({
    Favorites: FavoritesScreen
})

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorites',
   tabBarIcon: ({ focused }) => (
    <AntDesign
      focused={focused}
      name='hearto'
      size={20}
      color={focused ? Colors.primary : 'black'}
    />
  ),
};

export const SettingsStack = createStackNavigator({
    Favorites: SettingsScreen
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
   tabBarIcon: ({ focused }) => (
    <AntDesign
      focused={focused}
      name='setting'
      size={20}
      color={focused ? Colors.primary : 'black'}
    />
  ),
};

const UploadStack = createStackNavigator({
    Upload: UploadScreen
})

UploadStack.navigationOptions = ({navigation}) => ({
  tabBarLabel: 'Upload',
   tabBarIcon: ({ focused, tintColor }) => (
    <AntDesign
      focused={focused}
      name='upload'
      size={20}
      color={focused ? Colors.primary : 'black'}
    />
  ),
});

export const MapViewStack = createStackNavigator({
  Mapview: MapviewScreen
})

MapViewStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused, tintColor }) => (
    <AntDesign
      focused={focused}
      name='home'
      size={20}
      color={focused ? Colors.primary : 'black'}
    />
  ),
}

export default createBottomTabNavigator({
  SearchStack,
  FavoritesStack,
  UploadStack,
  SettingsStack
},
{
  tabBarOptions: {
    activeTintColor: Colors.primary
  }
});
