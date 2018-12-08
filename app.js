const yargs = require('yargs');

const geocode =require('./geocode/geocode');
const weather =  require('./weather/weather');

const argv= yargs
.options({
    a:{
        demand:true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) =>{
    if(errorMessage){
        console.log(errorMessage)
    }else{
        console.log(results.address);
        weather.getweather(results.latitude,results.longitude,(errorMessage, weatherResults) => {
            if(errorMessage){
                 console.log(errormessage);
            }
            else{
                console.log(`It's currently ${weatherResults.temperature}. It's feels like ${weatherResults.apparentTemperature}`);
            }
        });

    }
});

