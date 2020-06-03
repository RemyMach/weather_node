const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const weather = require('./utils/WeatherFromCoordinate')

//plusieurs Callback chainée pour faire plusieurs choses à la suite
if(process.argv.length === 3){
    city = process.argv[2]
    geocode(city, (error, success) => {
    // marche aussi en métant :
    // geocode(city, (error, {latitude, longitude} = {}) => {
        if(error){
            return console.log('Error: ' + error )
        }
        console.log('Success1: ' + JSON.stringify(success))
        const {latitude, longitude} = success
        weather(latitude, longitude, (error, success) => {
            if(error){
                return console.log('Error: ' + error )
            }
            console.log('Success2: ' + JSON.stringify(success))
        })
        forecast(latitude, longitude, (error, success) => {
            if(error){
                return console.log('Error: ' + error )
            }
            console.log('Success3: ' + JSON.stringify(success))
        })
    })
}else{
    console.log('Error: you need to provide a city name')
    console.log('node app.js "<city name>" ')
}