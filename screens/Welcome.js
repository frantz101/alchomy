import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Dimensions,
  ImageBackground,
  Button,
  Animated
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
      loaded: false,
      fadeAnim: new Animated.Value(0), 
    }
  }
  
 loadedDone() {
   this.setState({
     loaded: true
   })
 }
 
 componentDidMount() {
   Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();
 }
  
  render() {
    const {width, height} = Dimensions.get('screen')
    let { fadeAnim } = this.state;
    
    
   
    return (
      <View style={styles.container} >
      <ActivityIndicator size='large' style={{ ...styles.container, display: this.state.loaded ? 'none' : 'block'}} />
      <Animated.View style={{...styles.container, opacity: fadeAnim,}} >
          <ImageBackground 
            style={{ 
              flex: 1, }}
              source={require('../assets/images/bg.jpg')} 
              onLoadEnd={() => this.setState({
                loading: true
              })}
              onLoad={this.loadedDone.bind(this)}
              >
            <View 
              style={{
                flex: 1, 
                backgroundColor: "rgba(0,0,0,0.6)",
                justifyContent: 'center',
                alignItems: 'center',
                display: this.state.loaded ? 'block' : 'none'
              }}>
              <View style={{...styles.welcomeWrapper, width, height: height/2}}>
                <Text style={{...styles.titleText, width}}>Alchomy</Text>
                <View style={styles.buttons}>
                <View style={ styles.emailButton}>
                  <Button 
                    onPress={(e) => this.props.navigation.navigate('Login') }
                    title="Continue with email"
                    color='#fff'
                  />
                  </View>
                  <View style={styles.facebookButton}>
                    <Button 
                      onPress={(e) => console.log('Will Login with facebook') }
                      title='Continue with Facebook'
                      color='#fff'
                    />
                  </View>
                  
                </View>
              </View>
            </View>
          </ImageBackground>
        </Animated.View>
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
