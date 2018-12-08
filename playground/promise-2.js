var request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve,reject) =>{
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDEMKmy5M8M0JbWiaUWBSdFplW-nKhOE4E`,
        json:true
    },(error,response,body)=>{
        
            if(error){
                reject('unable to connect to the servers');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('unable to find the address');
            }else if(body.status ==='OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longitude:body.results[0].geometry.location.lng
                });
            }
        });
    });

};

geocodeAddress('000000').then((location) => {
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) => {
    console.log(errorMessage);
});