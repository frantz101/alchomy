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
import Qs from 'qs'

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
    this.state = {
      loaded: false, 
      location: null,
      errorMessage: null,
      bars: [],
      barMarkers: null
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
  
  componentDidMount() {
     
   
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?` + Qs.stringify({
      key: 'AIzaSyDJO00jf6bw0M-qc6vrVRXeaG_ZKCGDkkw',
      location: `${location.coords.latitude},${location.coords.longitude}`,
      rankby: 'distance',
      type: 'bar',
      opennow: true
    })
    let request =  fetch(url).then(response => response.json()).then(data => { 
      this.setState({ location }) 
      let barMarkers = data.results.map( (bar, index) => <Marker key={index.toString()} onPress={(event) => {
                        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
                        const latLng = `${bar.geometry.location.lat},${bar.geometry.location.lng}`;
                        const label = bar.name
                        const url = `https://m.uber.com/ul/?client_id=oY3mhYVkG0lsHk3JpPypb4z3QH0eg-XP&action=setPickup&pickup[latitude]=${this.state.location.coords.latitude}&pickup[longitude]=${this.state.location.coords.longitude}&dropoff[latitude]=${bar.geometry.location.lat}&dropoff[longitude]=${bar.geometry.location.lng}`
                        Linking.openURL(url); 
                      } }
                      coordinate={{latitude: bar.geometry.location.lat, longitude: bar.geometry.location.lng}} title={bar.name} 
                      icon={bar.icon} 
                      />) 
      this.setState({barMarkers})

    }) .catch(err => console.log(err))
    
      
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
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.06866,
                    }   } 
                      scrollEnabled={false}>
                      {this.state.barMarkers}
             
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
