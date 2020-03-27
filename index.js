var weather = require('openweather-apis');
require('dotenv').config();



weather.setLang('en');
weather.setCityId(344979);
weather.setUnits('metric');


weather.setAPPID(process.env.API_KEY);



weather.getSmartJSON(function(smart){
    console.log(smart);
});