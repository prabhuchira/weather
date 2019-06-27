const request = require('request');

function getApi(url,callback){

    return new request({url,json:true},(error,{body})=>{
        if(error){
            console.log('Error Occured',error)
            return 
        }
        callback(body)

    })

}

getApi('https://api.darksky.net/forecast/919e188f634310a7acdf94702692f9fc/37.8267,-122.423',data=>console.log(data,"ass"));
