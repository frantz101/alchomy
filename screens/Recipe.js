import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Button,
  StatusBar
} from 'react-native';
import { Svg } from 'expo';
import Colors from '../constants/Colors'
import StarRating from 'react-native-star-rating';
import { EvilIcons } from "@expo/vector-icons";


export default class RecipeScreen extends React.Component {
  static navigationOptions = {
      header: null
  };
  
  constructor(props){
    super(props)
    let bgImage = ''
    this.parseIngredients = this.parseIngredients.bind(this)
    this.state = {
      loaded: false,
      title: '',
      source: '',
      rating: 3,
      instructions: '',
      instructionText: '',
      ingredientText: '',
      instructionDisplay: 'none',
      ingredientDisplay: 'block',
      ingredients: ''
    }
  }
  
  
  parseInstructions() {
       this.setState({
          ingredientDisplay: 'none',
          instructionDisplay: 'block',
      })
       if(this.state.instructions==='')
        return
      let instructionText = this.state.instructions.split(';').map( (instruction, index) => {
            return  <Text key={index}>{`${index + 1}. ${instruction}`}</Text>
      } )
     this.setState({
          instructionText
      })
  }
  parseIngredients() {
      console.log('called')
        this.setState({
          instructionDisplay: 'none',
          ingredientDisplay: 'block',
      })
      if(this.state.ingredients==='')
        return
      let ingredientText = this.state.ingredients.split(',').map( (ingredient, index) => {
            return  <Text key={index}>{`${index + 1}. ${ingredient}`}</Text>
      } )
      this.setState({
         ingredientText: ingredientText
      })
  }
  
  componentDidMount() {
    const {navigation} = this.props
    this.setState({
        title: navigation.getParam('title', ''),
        source: navigation.getParam('source', ''),
        rating: navigation.getParam('rating', 3),
        instructions: navigation.getParam('instructions', ''),
        ingredients: navigation.getParam('ingredients', 'no Ingredients'),
    })
    
    setTimeout( () => {
      if(this.state.ingredients && this.state.ingredientDisplay === 'block')
      this.parseIngredients()
    }, 3000)   
  }
  
  render() {
    const {width, height} = Dimensions.get('screen')
    return (
      <ScrollView style={{...styles.container, width: width - 20, height, }}>
            <StatusBar hidden={true}/> 
            <Image source={{uri: this.state.source }} style={{height: height/3, width}}/>
            <Text style={styles.titleText} >{this.state.title}</Text>
            <View style={{ width: width/3,}}>
            <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.state.rating}
                        emptyStarColor={'grey'}
                        fullStarColor='gold'
                        starSize={20}
                      />
            </View>
            <View style={styles.tab}>
                <View style={{flex: 1, borderBottomWidth: this.state.ingredientDisplay === 'block' ? 1 : 0, borderColor: 'grey', marginBottom: 20,}}>
                <Button 
                    title='Ingredients'
                    onPress={this.parseIngredients}
                    color='black'
                />
                </View>
                 <View style={{flex: 1, borderBottomWidth: this.state.instructionDisplay === 'block' ? 1 : 0, borderColor: 'grey', marginBottom: 20}}>
                <Button 
                    title='Instructions'
                    onPress={this.parseInstructions.bind(this)}
                    color='black'
                />
                </View>
             </View>
             <View style={{display: this.state.instructionDisplay }}>
                {(() => this.state.instructionText==='' ? <Text>No instructions</Text> : this.state.instructionText )() }
             </View>
             <View style={{display: this.state.ingredientDisplay }}>
                {(() => this.state.ingredientText==='' ? <ActivityIndicator  size="large" color="#0000ff" /> : this.state.ingredientText )() }
             </View>
      </ScrollView>
    );
 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 10,
    marginBottom: 0
  },
  titleText: {
    fontSize: 40,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
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
  tab: {
      flexDirection: 'row'
  }
});
