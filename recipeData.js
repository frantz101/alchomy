 import {AsyncStorage} from 'react-native'
 
 let _storeData = (async () => {
  try {
    return await AsyncStorage.setItem('Favorites', JSON.stringify([]));
  } catch (error) {
    // Error saving data
    console.log(error)
  }
})();





export const recipeManager = ( () => {
    let recipeData = [
        {
            id: 1,
            ingredients: "eggs,sugar,rhum,flour,vanilla extract",
            instructions: "Pre-heat oven to 350 degrees.;Grease and flour three 6' X 1 1/2' round cake pans.;Mix together flour, cocoa powder, baking powder and baking soda. ;...In a large bowl, beat butter, eggs and vanilla.;Gradually add sugar.;Beat on medium to high speed for about 3-4 minutes until well mixed.",
            rating: 3,
            titleText: 'TITLE',
            source: 'https://www.sprinklesandsprouts.com/wp-content/uploads/2016/09/toffee-apple-martini-cocktail.jpg'
        },
        {
            id: 2,
            ingredients: "eggs,sugar,rhum,flour,vanilla extract",
            instructions: "Pre-heat oven to 350 degrees.;Grease and flour three 6' X 1 1/2' round cake pans.;Mix together flour, cocoa powder, baking powder and baking soda. ;...In a large bowl, beat butter, eggs and vanilla.;Gradually add sugar.;Beat on medium to high speed for about 3-4 minutes until well mixed.",
            rating: 3,
            titleText: 'TITLE',
            source: 'https://www.sprinklesandsprouts.com/wp-content/uploads/2016/09/toffee-apple-martini-cocktail.jpg'
        },
        {
            id: 3,
            ingredients: "eggs,sugar,rhum,flour,vanilla extract",
            instructions: "Pre-heat oven to 350 degrees.;Grease and flour three 6' X 1 1/2' round cake pans.;Mix together flour, cocoa powder, baking powder and baking soda. ;...In a large bowl, beat butter, eggs and vanilla.;Gradually add sugar.;Beat on medium to high speed for about 3-4 minutes until well mixed.",
            rating: 2,
            titleText: 'TITLE',
            source: 'https://www.sprinklesandsprouts.com/wp-content/uploads/2016/09/toffee-apple-martini-cocktail.jpg'
        },
        {
            id: 4,
            ingredients: "eggs,sugar,rhum,flour,vanilla extract",
            instructions: "Pre-heat oven to 350 degrees.;Grease and flour three 6' X 1 1/2' round cake pans.;Mix together flour, cocoa powder, baking powder and baking soda. ;...In a large bowl, beat butter, eggs and vanilla.;Gradually add sugar.;Beat on medium to high speed for about 3-4 minutes until well mixed.",
            rating: 5,
            titleText: 'TITLE',
            source: 'https://www.sprinklesandsprouts.com/wp-content/uploads/2016/09/toffee-apple-martini-cocktail.jpg'
        },
    ]
    let favorites = (async () => {
        try {
        const value = await AsyncStorage.getItem('TASKS');
        if (value !== null) {
          // We have data!!
          return JSON.parse(value)
        }
      } catch (error) {
        // Error retrieving data
      }
    })()
    
    return ({
        getData: () => recipeData,
        getFavorites: () => favorites,
        deleteItem: (itemId, cb) => 
            { 
                recipeData = recipeData.filter( (item) => item.id !== itemId)
                cb(recipeData)
            },
        addItem: (item, cb) => {
            recipeData.push(item)
            cb(recipeData)
        },
        addToFavorites: (item) => {
            let found = favorites.findIndex( (myItem) => item.id == myItem.id)
            if(found !==-1)
                return
            favorites.push(item)
            console.log(favorites.length)
            },
        removeFavorite: (itemId, cb) => { 
            favorites = favorites.filter( item => item.id !== itemId)
            cb(favorites)
        }
    })
    
})()
    