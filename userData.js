
import * as firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyAPr5x01mYvUGD4sscSSRegv66eiD3BVzo",
    authDomain: "alchomy-1556144700509.firebaseapp.com",
    databaseURL: "https://alchomy-1556144700509.firebaseio.com",
    projectId: "alchomy-1556144700509",
    storageBucket: "alchomy-1556144700509.appspot.com",
    messagingSenderId: "347183376586"
  };
  
  let db;


(function connectDb() {
    db = firebase.initializeApp(config).firestore()
})()




export const UserManager = ( () => {
    let user = ''
    let userData = 
    [
        {
            name: 'Shabazz McCollum',
            email: 'ShabazzM@gmail.com',
            password: 'password1',
            favoriteBar: ['Primetime']
        },
        {
            name: 'Wayne Santana',
            email: 'WayneS@yahoo.com',
            password: 'password2',
            favoriteBar: ['Sportsbar']
        },
        {
            name: 'Travis James',
            email: 'TravisJ@gmail.com',
            password: 'password3',
            favoriteBar: ['Bar and Grill']
        },
        {
            name: 'Chris Tallman',
            email: 'ChrisT@yahoo.com',
            password: 'password4',
            favoriteBar: ['Dusty’s Bar']
        },
        {
            name: 'Mark Sauvage',
            email: 'MarkS@gmail.com',
            password: 'password5',
            favoriteBar: ['Upper Echelon Bar']
        }]
        
        let Bar =  [
        {
            name: 'Primetime',
            address: '123 nw 123rd street',
            daysOfOperation: 'Mo-Su',
            hoursOfOperation: '8pm - 3am',
            happyHour: '9pm -10pm'
        },
        {
            name: 'Sportsbar',
            address: 'Sportsbar ave taft street',
            daysOfOperation:  'Tu-Sa',
            hoursOfOperation: '12pm - 12 am',
            happyHour: '6pm - 7pm'
        },
        {
            name: 'Bar and Grill',
            address: '1213 ne 135 street',
            daysOfOperation: 'Mo - Su',
            hoursOfOperation: '11am - 3am',
            happyHour: '11pm - 12pm'
        },
        {
            name: 'Dusty’s Bar',
            address: 'W Tennessee High Road',
            daysOfOperation: ' Mo-Su',
            hoursOfOperation: '11am - 11pm',
            happyHour: '9pm - 10pm'
        },
        {
            name: 'Upper Echelon Bar',
            address: '722 nw 152 street',
            daysOfOperation: 'Mo - Su',
            hoursOfOperation: '11am - 8pm',
            happyHour: '5pm - 6pm'
        }
    ]
    
    let barData = [
{
name: "Primetime",
address: "123 nw 123rd street",
daysOfOperation: "Mo-Su",
hoursOfOperation: "8pm - 3am",
happyHour: "9pm -10pm"
},
{
name: "Sportsbar",
address: "Sportsbar ave taft street",
daysOfOperation:  "Tu-Sa",
hoursOfOperation: "12pm - 12 am",
happyHour: "6pm - 7pm"
},
{
name: "Bar and Grill",
address: "1213 ne 135 street",
daysOfOperation: "Mo - Su",
hoursOfOperation: "11am - 3am",
happyHour: "11pm - 12pm"
},
{
name: "Dusty’s Bar",
address: "W Tennessee High Road",
daysOfOperation: " Mo-Su",
hoursOfOperation: "11am - 11pm",
happyHour: "9pm - 10pm"
},
{
name: "Upper Echelon Bar",
address: "722 nw 152 street",
daysOfOperation: "Mo - Su",
hoursOfOperation: "11am - 8pm",
happyHour: "5pm - 6pm"
}]


    
    return ({
            setUser:  user => {
                this.user = user
                } ,
            getUser:  () => this.user,
            findUser: user  => userData.find(myUser => {
                return myUser.email.toLowerCase() === user.email.toLowerCase()
                }),
            findBar: bar => barData.findIndex( myBar => {}),
            addUser: (user, cb) => {
               let exist = false
               db.collection("users").get().then(snapshot => {
                   snapshot.forEach( docs => {
                       let data = docs.data()
                       if(data.email === user.email) {
                           exist = true
                       }
                   })
                   if(exist) {
                       return {
                           error: "Item exist already",
                           success: false
                       }
                   }
                   else {
                        db.collection("users").add(user).then( response => {
                            return {
                                error: "",
                                success: true
                            }
                        }).catch(err => {
                            console.log(err)
                            return {
                                error: "something not right here",
                                success: false,
                            }
                        })
                       
                   }
               })
            },
            getFavoriteBars: () =>  {
                let found = userData.find( myUser => this.user.email.toLowerCase() === myUser.email.toLowerCase()) 
                return found ? found.favoriteBar : [] 
            },
            addFavoriteBar: ( bar) => {
                let found = userData.find(myUser => {
                    return myUser.email.toLowerCase() === this.user.email.toLowerCase()
                })
                if(found ){
                    let bar = found.favoriteBar.find(myBars => myBars === bar)
                    if(bar) {
                        found.favoriteBar.push(bar)
                    }
                }
            },
            removeFavoriteBar: ( bar) => {
                 let found = userData.find(myUser => {
                    return myUser.email.toLowerCase() === this.user.email.toLowerCase()
                })
                if(found) {
                     found.favoriteBar = found.favoriteBar.filter(myBars => myBars !== bar)
                }
            }
        })

})()