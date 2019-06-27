const request = require('request');

const getForecast = (lat,long,callback)=>{

    var url = 'https://api.darksky.net/forecast/919e188f634310a7acdf94702692f9fc/' + encodeURIComponent(lat)+ ','  + encodeURIComponent(long);
    
    request({
        url,
        header:{
            'Content-Type':'application/json'
        },
        json:true
    },(error,response)=>{
        if(error){
            callback('Unable to find server',undefined)
        }
        else if(response.body.error == 404){
            callback('Unable to fetch',undefined)
        }
        else {
            callback("Successfully completed",{
                latitude:response.body.latitude,
                longitude:response.body.longitude
            })
        }
    })
}

module.exports = getForecast