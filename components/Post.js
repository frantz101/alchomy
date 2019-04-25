import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Dimensions,
  ImageBackground,
  Button
} from 'react-native';
import { Svg } from 'expo';
import StarRating from 'react-native-star-rating';
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'

export default class PostScreen extends React.Component {
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
    const myHeight = Math.floor(height/5)
    const {navigate} = this.props
    const {source, rating, instructions, ingredients, heart, item, manager, updateFavorites} = this.props

    return (
                <View style={{ height: myHeight, borderWidth: 1, borderRadius: 20, overflow: 'hidden',marginBottom: 20}} >
                  <TouchableOpacity onPress={() => navigate('Recipe', {title: this.props.titleText, source, rating, instructions, ingredients} )}>
                    <ImageBackground source={{uri: source}} style={{width, height: myHeight, }} >
                    <View style={{width: width /1.5, height: myHeight - 35, position: 'absolute', top: 35, padding: 10 }}>
                      <Text style={styles.titleText}>{item.titleText}</Text>
                        <StarRating
                          disabled={true}
                          maxStars={5}
                          rating={this.props.rating}
                          emptyStarColor={'#fff'}
                          fullStarColor='beige'
                        />
                    </View>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableHighlight underlayColor={'#17B610'} onPress={ () => manager.addToFavorites(item) } 
                    style={{ width: 40, height: 40, position: 'absolute', left: 350}}>
                      <Ionicons 
                        name={this.props.filled === 'filled' ? 'md-heart-empty' : 'md-heart' }
                        size={26}
                      />
                   </TouchableHighlight>
                </View>
            );
 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeWrapper: {
  },
  titleText: {
    fontSize: 40,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#fff',
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
