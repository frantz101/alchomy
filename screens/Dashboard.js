import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Button
} from 'react-native';
import { Svg } from 'expo';
import Colors from '../constants/Colors'


export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  constructor(props){
    super(props)
    let bgImage = ''
    this.state = {
      loaded: false
    }
  }
  
 
  
  render() {
    const {width, height} = Dimensions.get('screen')

   
    return (
      <View style={styles.container}>
        <Text> Dashboard </Text>
      </View>
    );
 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeWrapper: {
  },
  titleText: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    padding: 40,
    height: '50%',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
  },
  emailButton: {
    backgroundColor: Colors.primary,
    width: 250,
    height: 60,
    borderWidth: 3,
    borderColor: Colors.primary,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10
  },
  facebookButton: 
  {
    width: 250,
    height: 60,
    backgroundColor: Colors.facebook,
    borderWidth: 3,
    borderColor: Colors.facebook,
    borderRadius: 10,
    padding: 10
  }
});
