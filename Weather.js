const axios = require('axios').default;

const url = 'http://api.weatherstack.com/current?access_key=7c4fcd9e21cade1bea8c6e42779f80ab&query=Paris'
const urlError =  'http://api.weatherstack.com/current?access_key=7c4fcd9e21cade1bea8c6e42779f80ab&query=fdfdsfdsf'
const api = 'pk.eyJ1IjoicG9tbWVwb21tZSIsImEiOiJja2F4eXNtMmkwYjNmMndxcWVpa3hiaXZkIn0.CMFy5-5BH2iNnE1d-1Q-dg'

const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Paris.json?access_token=' + api

axios.get(urlError)
  .then((response) => {
    const temperature = response.data.current.temperature
    const precipitation = response.data.current.precip
    console.log('It is currently ' + temperature + ' degrees out. There is a ' + precipitation + '% chance of rain')
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });

axios.get(mapBoxURL)
.then((response) => {
  if(response.data.features.length === 0){
    console.log('on ne trouve pas cette localisation')
  }else{
    console.log('latitude ' + response.data.features[0].center[0])
    console.log('longitude ' + response.data.features[0].center[1])
  }

})
.catch((error) => {
  // handle error
  console.log(error);
});