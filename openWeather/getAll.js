var weather = require('openweather-apis');
require('dotenv').config();


var Request = require("request");

Request.get('https://api.openweathermap.org/data/2.5/weather?id=344979&units=metric&lang=en&mode=json&APPID=1ca19a315f3648a441ccbc8d71634be4', (error, response, body) => {
    if(error) {
       console.log('you have an error');
       
    }
    return body
});



const got = require('got');

const weatherData = async function(){
    try {
        const response = await got('https://api.openweathermap.org/data/2.5/weather?id=344979&units=metric&lang=en&mode=json&APPID=1ca19a315f3648a441ccbc8d71634be4');
        return response.body  
    } catch (error) {
        return error.response.body
    }
};

const data = weatherData().then( (success, err) => {
    if (err) { console.error(err); }
    console.log(success)
})

console.log(data);













/*
weather.setLang('en');
weather.setCityId(344979);
weather.setUnits('metric');
weather.setAPPID(process.env.API_KEY);
// const temprature
const temp = weather.getTemperature( function(err, temp){
 //  console.log(temp);
  return temp
  
});

const weatherCondtion = weather.getWeatherForecastForDays(3, function(err, obj){
    return obj;
});
    
    

console.log(weatherCondtion);

      




// console.log(nowWeather.pressure);
*/