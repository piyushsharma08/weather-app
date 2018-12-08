const request= require('request');

var getweather= (lat,long, callback)=>{
    request({
        url:`https://api.darksky.net/forecast/4723abf8f58b99de37d24c393cf91cca/${lat},${long}`,
        json:true
    },(error,Response,body)=>{
        if(!error && Response.statusCode===200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        }else {
            callback('Unable to fetch weather');
        }
    });
}
module.exports={
    getweather
};
