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
  Button,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import Colors from '../constants/Colors'
import Svg, { Defs, LinearGradient, Stop, Path, G } from 'react-native-svg'


export default class SearchScreen extends React.Component {
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
    let loginWrapperOffset = (width -(width / 1.5) ) / 2 
   
    return (
      <View style={styles.container}>
        <Svg width={width} height={267}>
            <Defs>
              <LinearGradient
                x1="-2.501%"
                y1="42.079%"
                x2="133.48%"
                y2="121.668%"
                id="prefix__a"
              >
                <Stop stopColor="#115687" offset="0%" />
                <Stop stopColor="#27CEC2" offset="100%" />
              </LinearGradient>
            </Defs>
            <Path
                d="M424.19-23.06c5.26 1.28 8.92 5.64 8.92 10.64v140.17c-4.08 97.9-31.97 143.98-83.68 138.24-77.56-8.62-100.49-145.39-199.06-169.66-26.94-6.63-54.04-5.54-81.3 3.25-33.14 10.7-69.45-5.31-81.09-35.76-3.87-10.12-4.63-21.03-2.21-31.52 3.29-14.19 29.57-127.75 32.86-141.95 1.37-5.94 7.73-9.73 14.2-8.47.19.04.38.08.57.13 78.16 18.98 351.71 85.44 390.79 94.93z"
              fill="url(#prefix__a)"
              fillRule="evenodd"
            />
        </Svg>
    <KeyboardAvoidingView behavior="padding" scrollEnabled={true} enabled>  
      <View style={{...styles.loginWrapper, width: width / 1.5, height: height/1.6, left:  loginWrapperOffset, }}>
        <View style={styles.form}>
          <Text style={styles.loginTitle}>Upload Recipe</Text>
          <View style={styles.inputWrapper}>
            <TextInput
                 style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 10}}
                 placeholder='Title'
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 10}}
              placeholder='Drink Type'
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 10}}
              textContentType='password'
              placeholder='ingredient1,ingredient2,ingredient3'
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 10}}
              secureTextEntry={true} 
              textContentType='password'
              placeholder='instruction1;instruction2;instruction3'
            />
            <View style={styles.loginButtonWrapper}>
              <Button
                title='Upload'
                color='black' 
                onPress={() => {}}
              />
            </View>
        </View>
      </View>
      </View>
    </KeyboardAvoidingView>  
    <View style={{...styles.bottomWave, top: height - 117}}>
      <Svg width={width} height={117} >
        <G fill="#27CEC2" fillRule="evenodd" opacity={0.295}>
      <Path d="M454.57 129.532C430.497 33.49 383.22-9.145 312.74 1.63 207.02 17.793 63.499 114.03-7.982 71.166c-47.654-28.575-49.904 21.209-6.75 149.352l453.407-16.147 15.895-74.839z" />
        </G>
      </Svg>
    </View> 
    <View style={{...styles.bottomWave, top: height - 117}}>
      <Svg width={width} height={117} >
        <G fill="#27CEC2" fillRule="evenodd" opacity={0.295}>
          <Path d="M434.57 176.532C410.497 80.49 363.22 37.855 292.74 48.63 187.02 64.793 43.499 161.03-27.982 118.166-75.637 89.591-68.38 81.574-6.21 94.116l-28.522 173.402 453.407-16.147 15.895-74.839z" />
        </G>
      </Svg>
      </View>
    </View>
    );
 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
