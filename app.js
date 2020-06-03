const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const weather = require('./utils/WeatherFromCoordinate')


geocode('Paris', (error, success) => {
    console.log('Error: ' + error )
    console.log('Success1: ' + JSON.stringify(success))
})

weather(-73.989, 40.733, (error, success) => {
    console.log('Error: ' + error )
    console.log('Success2: ' + JSON.stringify(success))
})

forecast(-73.989, 40.733, (error, success) => {
    console.log('Error: ' + error )
    console.log('Success3: ' + JSON.stringify(success))
})