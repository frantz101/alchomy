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
  TextInput,
  FlatList
} from 'react-native';
import { Svg, } from 'expo';
import Colors from '../constants/Colors'
import Result from '../components/Post'
import {recipeManager} from '../recipeData'

export default class SearchScreen extends React.Component {
 static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      borderBottomWidth: 0,
    },
    headerLeft: (
      <Button
        onPress={() => navigation.navigate('Mapview')}
        title="Map"
        color={Colors.primary}
      />
    ),
  });
  
  constructor(props){
    super(props)
    let bgImage = ''
    const didBlurSubscription=''
    let favorites = recipeManager.getFavorites()
    this._renderItem = this._renderItem.bind(this)
    this._keyExtractor = this._keyExtractor.bind(this)
    this.state = {
      loaded: false,
      favoritesArr: ''
    }
  }
  
  _keyExtractor = (item, index) => item.id.toString()
  
   _renderItem = ({item}) => {
    return <Result
    id={item.id}
      navigate={this.props.navigation.navigate.bind(this)}
      instructions={item.instructions}
      ingredients={item.ingredients}
      rating={item.rating}
      manager={recipeManager}
      source={item.source}
      item={item} 
      />
   }
  
  componentDidMount() {
     this.props.navigation.addListener('didFocus', () => {
      this.setState({
        favoritesArr: recipeManager.getFavorites()
      })
    }) 
  }
  

  render() {
    const {width, height} = Dimensions.get('screen')
    let source = 'https://www.sprinklesandsprouts.com/wp-content/uploads/2016/09/toffee-apple-martini-cocktail.jpg'
    let instructions='Pre-heat oven to 350 degrees.;Grease and flour three 6" X 1 1/2" round cake pans.;Mix together flour, cocoa powder, baking powder and baking soda. ;...In a large bowl, beat butter, eggs and vanilla.;Gradually add sugar.;Beat on medium to high speed for about 3-4 minutes until well mixed.'
    let listData = this.state.favoritesArr
    return (
      <ScrollView style={{...styles.container, height: height}}>
            <View style={{
                        width: width - 20,
                        marginTop: 0,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: 0,
                        overflow: 'hidden',
            }}>
              <View style={{...styles.searchWrapper, width}}>
                <TextInput
                  placeholder='Search Favorites'
                  style={{
                    width: '50%',
                    height: 30,
                    padding: 10,
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: 'black',
                    textAlign: 'center'
                  }}
                />
              </View>
              <View>
                 <FlatList
                  data={listData}
                  extraData={this.state}
                  renderItem={this._renderItem}
                  keyExtractor={this._keyExtractor}
                />
              </View>
            </View>
      </ScrollView>
    );
 
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
  }, 
  searchWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20 ,
  }
});
