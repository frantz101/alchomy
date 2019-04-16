import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  Button
} from 'react-native';
import { Constants, Location, Permissions, Linking,  } from 'expo';
import Colors from '../constants/Colors'
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Svg, { Rect, Defs, Path, Use } from "react-native-svg"


export default class MapScreen extends React.Component {
static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      borderBottomWidth: 0,
    },
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Search')}
        title="Search"
        color={Colors.primary}
      />
    ),
  });
  
  constructor(props){
    super(props)
    let bgImage = ''
    this.state = {
      loaded: false, 
      location: null,
      errorMessage: null,
    }
  }
  
   
 componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  
  render() {
    const {width, height} = Dimensions.get('screen')
    const svgWidth = 40
    const svgHeight = 50
    const svgViewWidth = 40
    const svgViewHeight = 50
    const viewWrapperWidth = 200
    const viewWrapperHeight = 90
    
    return (
      <View style={styles.container}>
      {!this.state.location &&
          <ActivityIndicator size="large" color="#0000ff" />
      }
        {this.state.location &&
                <MapView style={{height: height , width: width, backgroundColor: '#36516E' }} 
                    region={{...this.state.location.coords, 
                            latitudeDelta: 0.01922,
                            longitudeDelta: 0.016866,
                    }   } 
                    onPress={(event) => {
                        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
                        const latLng = `${this.state.location.coords.latitude},${this.state.location.coords.longitude}`;
                        const label = 'Label'
                        const url = Platform.select({
                          ios: `${scheme}${label}@${latLng}`,
                          android: `${scheme}${latLng}(${label})`
                        });
                        Linking.openURL(url); 
                      } }
                      scrollEnabled={false}>
            <Marker coordinate={this.state.location.coords} centerOffset={{ y: -1*viewWrapperHeight, x: -10 }}>
              <View style={{width: viewWrapperWidth, height: viewWrapperHeight, backgroundColor:'#fff', }}>
                <View style={{width: svgViewWidth, height: svgViewHeight, position: 'absolute', top: viewWrapperHeight, left: (viewWrapperWidth - (svgViewWidth/2)) /2 }}>
                     <Svg
                      width={svgWidth}
                      height={svgHeight}
                    >
                    <Defs>
                      <Path
                        d="M 0 0 L 40 0 L 20 50 z"
                        id="a"
                      />
                    </Defs>
                    <Use href="#a" opacity={1} fill="#fff" fillOpacity={1} />
                  </Svg>
                </View>
              </View>
            </Marker>
             
        </MapView> 
        
        
        }
       <View style={{...styles.uberButtonWrapper, top: height-20 }} >
                <Button 
                  title='Request Uber'
                  color='#fff'
                  onPress={() => console.log('requesting Uber')}
                />
              </View>
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
  uberButtonWrapper: {
    backgroundColor: 'black',
    width: '80%',

  }
});
