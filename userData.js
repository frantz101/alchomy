export const UserManager = ( () => {
    let userData = 
    [
        {
            name: 'Shabazz McCollum',
            email: 'ShabazzM@gmail.com',
            password: 'password1',
            favoriteBar: 'Primetime'
        },
        {
            name: 'Wayne Santana',
            email: 'WayneS@yahoo.com',
            password: 'password2',
            favoriteBar: 'Sportsbar'
        },
        {
            name: 'Travis James',
            email: 'TravisJ@gmail.com',
            password: 'password3',
            favoriteBar: 'Bar and Grill'
        },
        {
            name: 'Chris Tallman',
            email: 'ChrisT@yahoo.com',
            password: 'password4',
            favoriteBar: 'Dusty’s Bar'
        },
        {
            name: 'Mark Sauvage',
            email: 'MarkS@gmail.com',
            password: 'password5',
            favoriteBar: 'Upper Echelon Bar'
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
            findUser: user  => userData.find(myUser => {
                return myUser.email.toLowerCase() === user.email.toLowerCase()
                }),
            findBar: bar => barData.findIndex( myBar => {})
        })

})()