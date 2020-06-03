const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const weather = require('./utils/WeatherFromCoordinate')

//plusieurs Callback chainée pour faire plusieurs choses à la suite
geocode('Paris', (error, success) => {
    console.log('Error: ' + error )
    console.log('Success1: ' + JSON.stringify(success))
    weather(success.latitude, success.longitude, (error, success) => {
        console.log('Error: ' + error )
        console.log('Success2: ' + JSON.stringify(success))
    })
    forecast(success.latitude, success.longitude, (error, success) => {
        console.log('Error: ' + error )
        console.log('Success3: ' + JSON.stringify(success))
    })
})